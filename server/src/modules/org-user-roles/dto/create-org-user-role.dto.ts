import { Organization } from "src/modules/organizations/organization.entity";
import { Role } from "src/modules/roles/role.entity";
import { User } from "src/modules/users/user.entity";

export class UpdateOrgUserRoleDto {
    readonly organization: Organization
    readonly user: User
    readonly roles: Role[]
}