import * as dotenv from 'dotenv';
dotenv.config()

// environment
const NODE_ENV: string = process.env.NODE_ENV || 'development'
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10

// typeorm
const enviroment = {
	development: {
		host: process.env.HOST,
        port: process.env.PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE,
	},
	production: {

	}
}
const TYPEORM = enviroment[NODE_ENV]

// jsonwebtoken
const ACCESS_TOKEN_SECRET: string =
	process.env.ACCESS_TOKEN_SECRET || 'access-token-key'
const REFRESH_TOKEN_SECRET: string =
	process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const RESETPASS_TOKEN_SECRET: string =
	process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'


export {
    NODE_ENV,
    BCRYPT_SALT,
    TYPEORM,
    RATE_LIMIT_MAX,
    ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET,
    RESETPASS_TOKEN_SECRET
}