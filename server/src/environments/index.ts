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
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
	},
	production: {

	}
}
const TYPEORM = enviroment[NODE_ENV]


export {
    NODE_ENV,
    BCRYPT_SALT,
    TYPEORM,
    RATE_LIMIT_MAX
}