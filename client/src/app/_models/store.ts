import { GroupState } from "@app/_store/Groups/groups.reducer";
import { Group, Lesson, Room, User } from ".";
import { UsersState } from "@app/_store/Users/users.reducer";

export interface IStore {
  lessons: Lesson[],
  groupsState: GroupState,
  usersState: UsersState,
  rooms: Room[]
}