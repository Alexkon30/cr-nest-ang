import { Args, Query, Resolver } from "@nestjs/graphql";
import { LoginResponse, LoginUserInput } from "src/generator/graphql.schema";
import { AuthService } from "src/services/auth.service";

@Resolver('Auth')
export class AuthResolver {
    constructor(
        private readonly authService: AuthService
    ) {}

    @Query('login')
    async login(@Args('user') loginUserInput: LoginUserInput): Promise<LoginResponse> {
        console.log('graph', loginUserInput)
        return this.authService.validateUserByPassword(loginUserInput)
    }
}