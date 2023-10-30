import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../groups/group.entity';
import { User } from '../users/user.entity';
import { Room } from '../rooms/room.entity';

@Entity({
  name: 'lessons',
})
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(() => Room, (room) => room.lessons, {
    nullable: true
  })
  room: Room

  @Column({ type: 'timestamptz' })
  dateStart: Date;

  @Column({ type: 'timestamptz' })
  dateEnd: Date;

  @Column()
  type: string;
}
