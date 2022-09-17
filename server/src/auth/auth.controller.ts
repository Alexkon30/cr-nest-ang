import {
  Controller,
  Post,
  UseGuards,
  Get,
  Request,
  Body,
  Req,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  UnauthorizedResponse,
  LoginResponse,
  LoginUserInput,
  ProfileResponse,
} from 'src/types';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация пользователя' })
  @ApiResponse({ status: 200, type: LoginResponse })
  @ApiResponse({ status: 401, type: UnauthorizedResponse })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Body() input: LoginUserInput, //for swagger
    @Req() req
  ) {
    return this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'Получить текущего пользователя из jwt токена' })
  @ApiResponse({ status: 200, type: ProfileResponse })
  @ApiResponse({ status: 401, type: UnauthorizedResponse })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
