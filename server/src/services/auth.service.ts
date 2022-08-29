import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities";
import { LoginResponse, LoginUserInput } from "src/generator/graphql.schema";
import { comparePassword } from "src/utils";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}
    async validateUser(loginAttempt: LoginUserInput): Promise<Omit<User, 'password'> | null> {
        const { email, password } = loginAttempt
        const user = await this.userService.findUserByEmail(email)

        if (user && comparePassword(user.password, password)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return {
                ...result,
            };
          }

        return null
    }

    async login(user: User): Promise<LoginResponse> {
        const payload = {email: user.email, sub: user._id}

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}