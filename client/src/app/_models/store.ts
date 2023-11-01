import { Group, Lesson, Room, User } from ".";

export interface IStore {
  lessons: Lesson[],
  groups: Group[],
  users: User[],
  rooms: Room[]
}