import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../generator/graphql.schema';
import { OrganizationUserRole } from '../org-user-roles/org-user-roles.entity';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({
    type: 'enum',
    enum: Role
  })
  value: Role;
  
  @ManyToOne(() => OrganizationUserRole, (org_user_role) => org_user_role.roles)
  org_user_role: OrganizationUserRole

}
