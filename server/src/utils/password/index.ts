import { hash, compare } from 'bcrypt';
import { BCRYPT_SALT } from 'src/environments';

export const hashPassword = async (password: string): Promise<string> => {
	return await hash(password, BCRYPT_SALT);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
	return await compare(password, hash)
}


