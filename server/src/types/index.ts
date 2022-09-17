import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/generator/graphql.schema';

type UserWithoutPass = Omit<User, 'password'>;

abstract class LoginUserInput {
  @ApiProperty({ example: 'user@mail.ru', description: 'email' })
  email: string;

  @ApiProperty({ example: '12345678', description: 'password' })
  password: string;
}

abstract class LoginResponse {
  @ApiProperty({
    example: 'string.string.string',
    description: 'jwt access token',
  })
  accessToken: string;
}

abstract class UnauthorizedResponse {
  @ApiProperty({ example: 401, description: 'Error code' })
  statusCode: number;

  @ApiProperty({ example: 'Unauthorized', description: 'Error description' })
  message: string;
}

abstract class ProfileResponse {
  @ApiProperty({
    example: 'b5ccebab-e803-498c-ab93-bb31fd010bb9',
    description: 'user id',
  })
  userId: string;

  @ApiProperty({ example: 'user@mail.ru', description: 'user email' })
  email: string;
}

export {
  UserWithoutPass,
  LoginUserInput,
  LoginResponse,
  UnauthorizedResponse,
  ProfileResponse,
};
