import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginResponse, LoginUserInput, UserWithoutPass } from "src/types";
import { comparePassword } from "src/utils";
import { UserService } from "../modules/users/user.service";

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
        const payload = { sub: user._id }
        const expiresIn = 60 * 60 * 24

        return {
            accessToken: this.jwtService.sign(payload),
            user,
            expiresIn
        }
    }
}