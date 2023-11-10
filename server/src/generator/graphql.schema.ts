
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Source {
    GROUP = "GROUP",
    TEACHER = "TEACHER",
    ROOM = "ROOM"
}

export enum RoleEnum {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
}

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export class CreateOrganizationInput {
    title: string;
}

export class CreateUserInput {
    email: string;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    patronymic?: Nullable<string>;
    roles?: Nullable<RoleEnum[]>;
}

export class UpdateUserInput {
    email: string;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    patronymic?: Nullable<string>;
    roles?: Nullable<RoleEnum[]>;
}

export class UpdateOrganizationRolesInput {
    organizationId: string;
    email: string;
    roles?: Nullable<RoleEnum[]>;
}

export class Group {
    id: number;
    title: string;
    students?: Nullable<User[]>;
}

export abstract class IQuery {
    abstract groups(): Nullable<Group[]> | Promise<Nullable<Group[]>>;

    abstract findLessons(dateStart?: Nullable<string>, dateEnd?: Nullable<string>, source?: Nullable<Source>, id?: Nullable<number>): Nullable<Lesson[]> | Promise<Nullable<Lesson[]>>;

    abstract roles(): Nullable<UserRole[]> | Promise<Nullable<UserRole[]>>;

    abstract users(role?: Nullable<RoleEnum>): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export class Lesson {
    id: number;
    discipline?: Nullable<string>;
    theme?: Nullable<string>;
    groups?: Nullable<Group[]>;
    teachers?: Nullable<User[]>;
    room?: Nullable<Room>;
    dateStart?: Nullable<Date>;
    dateEnd?: Nullable<Date>;
    type?: Nullable<string>;
}

export class OrganizationUserRole {
    id: number;
    organization?: Nullable<Organization>;
    user?: Nullable<User>;
    roles?: Nullable<UserRole[]>;
}

export class Organization {
    id: string;
    title: string;
}

export class UserRole {
    value: RoleEnum;
    id: number;
}

export class Room {
    id: number;
    number: number;
    lessons?: Nullable<Lesson[]>;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class User {
    id: number;
    email: string;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    patronymic?: Nullable<string>;
    group?: Nullable<Group>;
    roles?: Nullable<RoleEnum[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract createUsersByAdmin(inputs: CreateUserInput[], organizationId: string): Nullable<string> | Promise<Nullable<string>>;

    abstract updateOrganizationRoles(input: UpdateOrganizationRolesInput): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
