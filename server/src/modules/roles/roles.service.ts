import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/generator/graphql.schema';
import { Repository } from 'typeorm';
import { UserRole } from './role.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(UserRole)
        private readonly userRoleRepository: Repository<UserRole>,
    ) {}

    async findAll(): Promise<UserRole[]> {
        return this.userRoleRepository.find()
    }

    async findRoleByValue(value: Role): Promise<UserRole> {
        return this.userRoleRepository.findOneBy({value})
    }
}
