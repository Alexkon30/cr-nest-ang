import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user.entity";

@Entity({
    name: 'groups'
})
export class Group {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @OneToMany(() => User, user => user.group)
    students: User[]
}