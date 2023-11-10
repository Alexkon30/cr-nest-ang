import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnum } from '../../generator/graphql.schema';
import { User } from '../users/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: RoleEnum
  })
  value: RoleEnum;

  @ManyToMany(() => User, {
    nullable: true
  })
  users: User[]
}
