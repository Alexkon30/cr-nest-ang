
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

export class CreateUserInput {
    email: string;
    password: string;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class User {
    _id: string;
    email: string;
    password: string;
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    avatar?: Nullable<string>;
    gender?: Nullable<Gender>;
    type?: Nullable<Role>;
    createdAt: string;
    updatedAt: string;
}

export abstract class IQuery {
    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
