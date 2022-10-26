import { Discipline } from "./discipline";
import { Group } from "./group";
import { Mark } from "./mark";
import { Room } from "./room";
import { Theme } from "./theme";
import { User } from "./user";

export interface Lesson {
    id: number;
    status: string;
    teachers: [User];
    groups: [Group];
    discipline: Discipline
    theme: Theme
    room: Room
    dateStart: number;
    type: string;
    marks: [Mark];
}