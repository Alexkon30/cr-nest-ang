import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApolloError } from "apollo-server-core";
import { CreateUserInput, UpdateUserInput, User } from "src/generator/graphql.schema";
import { UserWithoutPass } from "src/types";
import { hashPassword } from "src/utils";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
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
}