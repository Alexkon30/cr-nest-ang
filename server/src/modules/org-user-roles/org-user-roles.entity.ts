import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "../organizations/organization.entity";
import { Role } from "../roles/role.entity";
import { User } from "../users/user.entity";

@Entity({
  name: 'organization_user_roles'
})
export class OrganizationUserRoles {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @OneToOne(() => Organization)
  @JoinColumn()
  organization: Organization

  @Column(() => User)
  @JoinColumn()
  user: User

  @Column(() => Role)
  @JoinColumn()
  role: Role
}