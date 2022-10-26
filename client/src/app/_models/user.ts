import { Role } from "./role";

export interface User {
    id: string;
    firstname: string;
    lastname: string;
    patronymic: string;
    token?: string;
    email: string;
    avatar: string;
    role: Role
}
