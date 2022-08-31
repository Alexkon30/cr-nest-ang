import { User } from "./user.entity";

export type UserWithoutPass = Omit<User, 'password'>