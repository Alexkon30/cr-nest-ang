import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrganizationUserRole } from "../org-user-roles/org-user-roles.entity";
import { Organization } from "../organizations/organization.entity";
import { UserRole } from "../roles/role.entity";
import { User } from "./user.entity";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User, OrganizationUserRole, UserRole, Organization])],
    providers: [UserService, UserResolver],
    exports: [UserService]
})
export class UserModule {}