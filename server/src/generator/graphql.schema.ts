
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

export enum UserType {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: Gender;
}

export class Users {
    users?: Nullable<User[]>;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class User {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    avatar?: Nullable<string>;
    gender: Gender;
    isVerified: boolean;
    isOnline: boolean;
    isLocked: boolean;
    isActive: boolean;
    type: UserType;
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
