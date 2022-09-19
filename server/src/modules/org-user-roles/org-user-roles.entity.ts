import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "../organizations/organization.entity";
import { UserRole } from "../roles/role.entity";
import { User } from "../users/user.entity";

@Entity({
  name: 'organization_user_roles'
})
export class OrganizationUserRole {
  @PrimaryGeneratedColumn()
  _id: number;

  @OneToOne(() => Organization)
  @JoinColumn()
  organization: Organization

  @OneToOne(() => User)
  @JoinColumn()
  user: User

  @OneToOne(() => UserRole)
  @JoinColumn()
  role: UserRole
}