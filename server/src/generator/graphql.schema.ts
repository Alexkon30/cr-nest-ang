
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum Gender {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE"
}

export enum UserType {
    BASIC = "BASIC",
    PREMIUM = "PREMIUM"
}

export class LoginUserInput {
    email?: Nullable<string>;
    password?: Nullable<string>;
}

export class CreateUserInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender: Gender;
}

export abstract class IQuery {
    abstract login(user?: Nullable<LoginUserInput>): LoginResponse | Promise<LoginResponse>;

    abstract hello(): string | Promise<string>;
}

export class Users {
    users?: Nullable<User[]>;
}

export class LoginResponse {
    accessToken: string;
    refreshToken: string;
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
    local?: Nullable<Local>;
    firstName: string;
    lastName: string;
    avatar?: Nullable<string>;
    gender: Gender;
    resetPasswordToken?: Nullable<string>;
    resetPasswordExpires?: Nullable<number>;
    isVerified: boolean;
    isOnline: boolean;
    isLocked: boolean;
    isActive: boolean;
    type: UserType;
    createdAt: string;
    updatedAt: string;
}

type Nullable<T> = T | null;
