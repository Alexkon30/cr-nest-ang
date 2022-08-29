import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmService } from './config';
import { AuthModule } from './modules/auth.module';
import { UserModule } from './modules/user.module';
import * as Resolvers from './resolvers'


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./src/**/*.(gql|graphql)'],
      debug: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [...Object.values(Resolvers)],
})
export class AppModule {}
