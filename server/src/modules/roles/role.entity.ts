import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '../../generator/graphql.schema';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column({
    type: 'enum',
    enum: Role
  })
  value: Role; 
}
