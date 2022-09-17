import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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