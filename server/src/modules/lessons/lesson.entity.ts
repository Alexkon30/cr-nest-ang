import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../users/user.entity';

@Entity({
  name: 'lessons',
})
export class Lesson {
  @PrimaryGeneratedColumn()
  _id: number;

  @Column() //@ManyToOne
  discipline: string //Discipline

  @Column() //@ManyToMany
  theme: string //Theme

  @Column() //@ManyToMany
  groups: string //Group[]

  @ManyToMany(() => User)
  @JoinTable()
  teachers: User[]

  @Column() //OneToOne()
  room: number //Room

  @Column({ type: 'timestamp' })
  dateStart: Date;

  @Column({ type: 'timestamp' })
  dateEnd: Date;

  @Column()
  type: string;
}
