import { UserRole } from "src/generator/graphql.schema";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  _id: number

  @Column({
    type: 'enum',
    enum: UserRole
  })
  value: UserRole; 
}