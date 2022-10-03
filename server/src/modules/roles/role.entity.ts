import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Role as RoleEnum } from '../../generator/graphql.schema';
import { OrganizationUserRole } from '../org-user-roles/org-user-roles.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({
    type: 'enum',
    enum: RoleEnum
  })
  value: RoleEnum;
  
  @ManyToOne(() => OrganizationUserRole, (org_user_role) => org_user_role.roles)
  org_user_role: OrganizationUserRole

}
