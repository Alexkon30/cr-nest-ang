import { Group } from "./group";
import { Room } from "./room";
import { User } from "./user";

export type Source = 'TEACHERS' | 'GROUPS' | 'ROOMS';

export interface IElement {
    id: number | string
}

export type Element = User | Group | Room


