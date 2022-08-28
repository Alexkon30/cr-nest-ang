import { Injectable } from "@nestjs/common";
import { LoginResponse, LoginUserInput } from "src/generator/graphql.schema";

@Injectable()
export class AuthService {
    async validateUserByPassword(loginAttempt: LoginUserInput): Promise<LoginResponse> {
        // const { email, password } = loginAttempt

        console.log('service', loginAttempt)

        return {
            accessToken: 'access',
            refreshToken: 'refresh'
        }
    }
}