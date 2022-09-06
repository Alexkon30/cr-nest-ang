import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { LoginUserInput } from "src/generator/graphql.schema";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@Controller('Auth')
export class AuthController {
    constructor (
        private readonly authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req: LoginUserInput) {
      const user = await this.authService.validateUser(req)
      return this.authService.login(user)
    }

    @UseGuards(JwtStrategy)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user
    }
}