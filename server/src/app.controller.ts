import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { LoginUserInput } from './generator/graphql.schema';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

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
