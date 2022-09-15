import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginResponse, LoginUserInput, UserWithoutPass } from "src/entities/types";
import { comparePassword } from "src/utils";
import { UserService } from "../services/user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
    ) {}
    async validateUser(loginAttempt: LoginUserInput): Promise<UserWithoutPass | null> {
        const { email, password } = loginAttempt
        const user = await this.userService.findUserByEmail(email)

        if (user && await comparePassword(password, user.password)) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { password, ...result } = user;
            return result;
          }
        return null
    }

    async login(user: UserWithoutPass): Promise<LoginResponse> {
        const payload = {email: user.email, sub: user._id}

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}