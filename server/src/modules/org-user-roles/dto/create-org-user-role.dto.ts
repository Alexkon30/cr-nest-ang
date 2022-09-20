import { Organization } from "src/modules/organizations/organization.entity";
import { UserRole } from "src/modules/roles/role.entity";
import { User } from "src/modules/users/user.entity";

export class CreateOrgUserRoleDto {
    readonly organization: Organization
    readonly user: User
    readonly role: UserRole
}