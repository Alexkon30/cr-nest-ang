import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/user.module';
import * as Resolvers from './resolvers'
import { AppController } from './app.controller';


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
  controllers: [AppController],
  providers: [...Object.values(Resolvers)],
})
export class AppModule {}
