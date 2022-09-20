import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApolloError } from "apollo-server-core";
import { instanceToPlain } from "class-transformer";
import { CreateUserInput, UpdateUserInput, User } from "src/generator/graphql.schema";
import { UserWithoutPass } from "src/types";
import { hashPassword } from "src/utils";
import { Repository } from "typeorm";
import { OrgUserRolesService } from "../org-user-roles/org-user-roles.service";
import { OrganizationsService } from "../organizations/organizations.service";
import { RolesService } from "../roles/roles.service";
import { User as UserEntity } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        private readonly rolesService: RolesService,
        private readonly organizationService: OrganizationsService,
        private readonly orgUserRoleService: OrgUserRolesService
    ) {}

    findUserByEmail(email: string): Promise<User> {
        return this.userRepository.findOneBy({ email })
    }

    findAllUsers(): Promise<User[]> {
        return this.userRepository.find()
    }

    async createUser(userInput: CreateUserInput): Promise<UserWithoutPass | undefined> {
        try {
            const { email } = userInput

            const existedUser = await this.userRepository.findOneBy({ email })

            if(existedUser) {
                throw new ForbiddenException('Email already existed')
            }
    
            const newUser = this.userRepository.create({
                email,
                password: await hashPassword(userInput.password)
            })
            
            await this.userRepository.save(newUser)
    
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result} = newUser
            return result

        } catch(err) {
            throw new ApolloError(err)
        }
    }

    async updateUser(userInput: UpdateUserInput): Promise<UserWithoutPass | undefined> {
        try {
            const { email } = userInput

            const existedUser = await this.userRepository.findOneBy({ email })

            if(!existedUser) {
                throw new ForbiddenException('User is not exist')
            }

            const properties = Object.keys(userInput).filter(el => el !== 'email')

            await Promise.all(properties.map(async (prop) => {
                if (prop === 'password') {
                    existedUser.password = await hashPassword(userInput[prop])
                } else if (prop === 'roles') {
                    //roles logic
                } else {
                    existedUser[prop] = userInput[prop]
                }
            }))
            
            await this.userRepository.save(existedUser)
            
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result} = existedUser
            return result
            
        } catch(err) {
            throw new ApolloError(err)
        }
    }

    async createUsersByAdmin(inputs: [CreateUserInput], organizationId: string): Promise<any> {
        try {
            const result = {}

            for (const userInfo of inputs) {
                const existedUser = await this.userRepository.findOneBy({ email: userInfo.email })
                if (!existedUser) {
                    const newUser = this.userRepository.create(userInfo)
                    await this.userRepository.save(newUser)

                    const infoPlain = instanceToPlain(userInfo)

                    if (infoPlain.hasOwnProperty('roles') && infoPlain.roles.length > 0) {
                        await Promise.all(userInfo.roles.map(async (role) => {

                            const userRole = await this.rolesService.findRoleByValue(role)

                            const organization = await this.organizationService.findOrganizationById(organizationId)

                            await this.orgUserRoleService.createOrgUserRole({
                                organization,
                                user: newUser,
                                role: userRole
                            })
                        }))
                    }
                    result[userInfo.email] = 'Created'
                } else {
                    result[userInfo.email] = 'Existed'
                }
            }

            console.log(result) 
            return 'ok' //add types
        } catch(err) {
            throw new ApolloError(err)
        }
    }
}