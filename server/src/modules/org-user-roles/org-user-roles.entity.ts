import { Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "../organizations/organization.entity";
import { Role } from "../roles/role.entity";
import { User } from "../users/user.entity";

@Entity({
  name: 'organization_user_roles'
})
export class OrganizationUserRole {
  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => Organization, organization => organization.orgUserRoles)
  // organization: Organization

  // @ManyToOne(() => User, user => user.orgUserRoles)
  // user: User

  @ManyToMany(() => Role)
  @JoinTable()
  roles: Role[]
}