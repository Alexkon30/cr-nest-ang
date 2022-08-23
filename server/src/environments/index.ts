import * as dotenv from 'dotenv';
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

export {
    NODE_ENV,
    BCRYPT_SALT
}