import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { GqlAuthGuard } from "src/auth/guards/gql-auth.guard";
import { CreateUserInput, RoleEnum, UpdateOrganizationRolesInput, UpdateUserInput } from "src/generator/graphql.schema";
import { UserService } from "src/modules/users/user.service";
import { UserWithoutPass } from "src/types";
import { User } from "./user.entity";

@Resolver('User')
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) {}

    @Query()
    // @UseGuards(GqlAuthGuard)
    users(
        @Args('role') role?: RoleEnum
        ): Promise<User[]> {
        return this.userService.findAllUsers(role)
    }

    @Mutation()
    createUser(
        @Args('input') input: CreateUserInput
    ): Promise<UserWithoutPass | undefined> {
        return this.userService.createUser(input)
    }

    @Mutation()
    updateUser(
        @Args('input') input: UpdateUserInput
    ): Promise<UserWithoutPass | undefined> {
        return this.userService.updateUser(input)
    }
    
    @Mutation()
    createUsersByAdmin(
        @Args('inputs') inputs: [CreateUserInput],
        @Args('organizationId') organizationId: string
    ): Promise<any> {
        return this.userService.createUsersByAdmin(inputs, organizationId)
    }

    @Mutation()
    updateOrganizationRoles(
        @Args('input') input: UpdateOrganizationRolesInput
    ) {
        return this.userService.updateOrganizationRoles(input)
    }
}