
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

export class LoginUserInput {
    email: string;
    password: string;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: Gender;
}

export abstract class IQuery {
    abstract login(user: LoginUserInput): LoginResponse | Promise<LoginResponse>;

    abstract users(): Nullable<User[]> | Promise<Nullable<User[]>>;
}

export class Users {
    users?: Nullable<User[]>;
}

export class LoginResponse {
    accessToken: string;
}

export class RefreshTokenResponse {
    accessToken: string;
}

export class Local {
    email?: Nullable<string>;
    password?: Nullable<string>;
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

export abstract class IMutation {
    abstract createUser(input: CreateUserInput): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
