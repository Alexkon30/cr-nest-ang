import { ForbiddenException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ApolloError } from "apollo-server-core";
import { User } from "src/entities";
import { CreateUserInput } from "src/generator/graphql.schema";
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

    async createUser(userInput: CreateUserInput): Promise<User | undefined> {
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
    
            return newUser

        } catch(err) {
            throw new ApolloError(err)
        }
    }
}