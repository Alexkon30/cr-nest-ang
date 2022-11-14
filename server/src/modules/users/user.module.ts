import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrgUserRolesModule } from "../org-user-roles/org-user-roles.module";
import { OrganizationsModule } from "../organizations/organizations.module";
import { RolesModule } from "../roles/roles.module";
import { UsersController } from "./user.controller";
import { User } from "./user.entity";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User]), OrgUserRolesModule, OrganizationsModule, RolesModule],
    providers: [UserService, UserResolver],
    exports: [UserService],
    controllers: [UsersController]
})
export class UserModule {}