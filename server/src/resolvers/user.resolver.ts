import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
// import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { User } from "src/entities";
import { CreateUserInput } from "src/generator/graphql.schema";
import { UserService } from "src/services/user.service";

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) {}

    @Query()
    // @UseGuards(GqlAuthGuard)
    async users(): Promise<User[]> {
        const users = await this.userService.findAllUsers()
        return users
    }

    @Mutation()
    async createUser(
        @Args('input') input: CreateUserInput,
    ): Promise<any> {
        return this.userService.createUser(input)
    }
}