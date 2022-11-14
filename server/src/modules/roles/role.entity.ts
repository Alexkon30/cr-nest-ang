import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnum } from '../../generator/graphql.schema';

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
