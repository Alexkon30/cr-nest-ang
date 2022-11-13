import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role as RoleEnum } from '../../generator/graphql.schema';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({
    type: 'enum',
    enum: RoleEnum
  })
  value: RoleEnum;
}
