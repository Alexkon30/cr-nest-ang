import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../groups/group.entity';
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

  @ManyToMany(() => Group)
  @JoinTable()
  groups: Group[]

  @ManyToMany(() => User)
  @JoinTable()
  teachers: User[]

  @Column() //@ManyToOne()
  room: number //Room

  @Column({ type: 'timestamptz' })
  dateStart: Date;

  @Column({ type: 'timestamptz' })
  dateEnd: Date;

  @Column()
  type: string;
}
