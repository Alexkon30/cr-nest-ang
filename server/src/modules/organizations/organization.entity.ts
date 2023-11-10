import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { OrganizationUserRole } from "../org-user-roles/org-user-roles.entity";
import { User } from "../users/user.entity";

@Entity({
  name: 'organizations',
  orderBy: {
    title: 'ASC',
  }
})
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  // @OneToMany(() => OrganizationUserRole, (orgUserRole) => orgUserRole.organization)
  // orgUserRoles: OrganizationUserRole[]

  // @Column()
  // lessons: Lesson[];

  // @Column()
  // groups: Group[];

  // @Column()
  // disciplines: Discipline[];

  // @Column()
  // rooms: Room[]

  // @Column()
  // programms: Programm[]
}