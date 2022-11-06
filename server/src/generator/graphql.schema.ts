
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Gender {
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export enum Role {
    OWNER = "OWNER",
    ADMIN = "ADMIN",
    TEACHER = "TEACHER",
    STUDENT = "STUDENT"
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
    roles?: Nullable<Role[]>;
}

export class UpdateUserInput {
    email: string;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    patronymic?: Nullable<string>;
    roles?: Nullable<Role[]>;
}

export class UpdateOrganizationRolesInput {
    organizationId: string;
    email: string;
    roles?: Nullable<Role[]>;
}

export class Lesson {
    _id?: Nullable<number>;
    discipline?: Nullable<string>;
    theme?: Nullable<string>;
    groups?: Nullable<string>;
    teachers?: Nullable<User[]>;
    room?: Nullable<string>;
}

export abstract class IQuery {
    abstract lessons(): Nullable<Lesson[]> | Promise<Nullable<Lesson[]>>;

    abstract roles(): Nullable<UserRole[]> | Promise<Nullable<UserRole[]>>;

    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export class Organization {
    _id: string;
    title: string;
}

export class UserRole {
    value: Role;
    _id?: Nullable<number>;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class User {
    _id: string;
    email: string;
    password?: Nullable<string>;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    patronymic?: Nullable<string>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract createUsersByAdmin(inputs: CreateUserInput[], organizationId: string): Nullable<string> | Promise<Nullable<string>>;

    abstract updateOrganizationRoles(input: UpdateOrganizationRolesInput): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
