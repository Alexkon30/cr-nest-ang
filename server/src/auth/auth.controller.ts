import { Controller, Post, UseGuards, Request, Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";
import { LocalAuthGuard } from "./guards/local-auth.guard";


@Controller('auth')
export class AuthController {
    constructor (
        private readonly authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      const user = await this.authService.validateUser(req.body)
      return this.authService.login(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user
    }
}