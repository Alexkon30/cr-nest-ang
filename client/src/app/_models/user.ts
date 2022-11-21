import { IElement } from "./common";
import { Role } from "./role";

export interface User extends IElement {
    firstName: string;
    lastName: string;
    patronymic: string;
    token?: string;
    email: string;
    avatar: string;
    role: Role
}
