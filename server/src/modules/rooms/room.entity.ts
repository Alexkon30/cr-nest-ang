import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lesson } from "../lessons/lesson.entity";

@Entity({
  name: 'rooms',
})
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number

  @OneToMany(() => Lesson, lesson => lesson.room, {
    nullable: true
  })
  lessons: Lesson[]
}