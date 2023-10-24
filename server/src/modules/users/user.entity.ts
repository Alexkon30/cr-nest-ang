import { Gender } from 'src/generator/graphql.schema';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../groups/group.entity';
import { OrganizationUserRole } from '../org-user-roles/org-user-roles.entity';

@Entity({
  name: 'users',
  orderBy: {
    lastName: 'ASC',
  }
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true
  })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({
    nullable: true
  })
  firstName: string;

  @Column({
    nullable: true
  })
  lastName: string;

  @Column({
    nullable: true
  })
  patronymic: string;

  @ManyToOne(() => Group, (group) => group.students, {
    nullable: true
  })
  group: Group

  @OneToMany(() => OrganizationUserRole, orgUserRole => orgUserRole.user, {
    nullable: true
  })
  orgUserRoles: OrganizationUserRole[]

  // @Column({
  //   nullable: true
  // })
  // avatar: string;

  // @Column({
  //   nullable: true
  // })
  // gender: Gender;

  // @Column({
  //   default: false
  // })
  // isVerified: boolean;

  // @Column({
  //   default: false
  // })
  // isOnline: boolean;

  // @Column({
  //   default: false
  // })
  // isLocked: boolean;

  // @CreateDateColumn()
  // createdAt: number;

  // @UpdateDateColumn()
  // updatedAt: number;
}
