
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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
    _id: string;
    title: string;
    students?: Nullable<User[]>;
}

export class Lesson {
    _id: number;
    discipline?: Nullable<string>;
    theme?: Nullable<string>;
    groups: Group[];
    teachers: User[];
    room?: Nullable<string>;
    dateStart?: Nullable<string>;
    dateEnd?: Nullable<string>;
    type?: Nullable<string>;
}

export abstract class IQuery {
    abstract lessons(dateStart?: Nullable<string>, dateEnd?: Nullable<string>): Nullable<Lesson[]> | Promise<Nullable<Lesson[]>>;

    abstract roles(): Nullable<UserRole[]> | Promise<Nullable<UserRole[]>>;

    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export class OrganizationUserRole {
    _id: string;
    organization?: Nullable<Organization>;
    user?: Nullable<User>;
    roles?: Nullable<UserRole[]>;
}

export class Organization {
    _id: string;
    title: string;
}

export class UserRole {
    value: RoleEnum;
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
    group?: Nullable<Group>;
    orgUserRoles?: Nullable<OrganizationUserRole[]>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract updateUser(input: UpdateUserInput): Nullable<User> | Promise<Nullable<User>>;

    abstract createUsersByAdmin(inputs: CreateUserInput[], organizationId: string): Nullable<string> | Promise<Nullable<string>>;

    abstract updateOrganizationRoles(input: UpdateOrganizationRolesInput): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
