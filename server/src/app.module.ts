import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './modules/users/user.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { OrgUserRolesModule } from './modules/org-user-roles/org-user-roles.module';
import { RolesService } from './modules/roles/roles.service';


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
    AuthModule,
    OrganizationsModule,
    OrgUserRolesModule
  ],
  providers: [RolesService]
})
export class AppModule {}
