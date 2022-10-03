import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";

@Entity({
  name: 'organizations',
  orderBy: {
    title: 'ASC',
  }
})
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  title: string;

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