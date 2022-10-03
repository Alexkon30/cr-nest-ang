import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApolloError } from "apollo-server-core";
import { instanceToPlain } from "class-transformer";
import { CreateUserInput, UpdateOrganizationRolesInput, UpdateUserInput } from "src/generator/graphql.schema";
import { UserWithoutPass } from "src/types";
import { hashPassword } from "src/utils";
import { Repository } from "typeorm";
import { OrgUserRolesService } from "../org-user-roles/org-user-roles.service";
import { OrganizationsService } from "../organizations/organizations.service";
import { RolesService } from '../roles/roles.service'
import { Role } from "../roles/role.entity";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly orgUserRoleService: OrgUserRolesService,
        private readonly organizationService: OrganizationsService,
        private readonly roleService: RolesService
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
                    result[userInfo.email] = 'Created'
                } else {
                    result[userInfo.email] = 'Existed'
                }

                // await this.organizationService.updateOrganizationRoles(organizationId, userInfo.roles, userInfo.email)
            }

            console.log(result) 
            return 'ok' //add types
        } catch(err) {
            throw new ApolloError(err)
        }
    }

    async updateOrganizationRoles(data: UpdateOrganizationRolesInput) {
        try {
            const organization = await this.organizationService.findOneById(data.organizationId)
            const user = await this.userRepository.findOneBy({email: data.email})
            const roles = []

            await Promise.all(data.roles.map(async (role) => {
                const roleEntity = await this.roleService.findRoleByValue(role)
                roles.push(roleEntity)
            }))

            const result = await this.orgUserRoleService.updateOrgUserRole({
                user,
                organization,
                roles
            })

            return result

        } catch(err) {
            throw new ApolloError(err)
        }
    }

}