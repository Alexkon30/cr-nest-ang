import type { IElement } from "./common";
import type { User } from "./user";

export interface Group extends IElement {
    title: string;
    students: [User];
}