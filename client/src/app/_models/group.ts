import { IElement } from "./common";
import { User } from "./user";

export interface Group extends IElement {
    title: string;
    students: [User];
}