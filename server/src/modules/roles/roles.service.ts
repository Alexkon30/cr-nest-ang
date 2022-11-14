import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleEnum } from 'src/generator/graphql.schema';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(Role)
        private readonly userRoleRepository: Repository<Role>,
    ) {}

    async findAll(): Promise<Role[]> {
        return this.userRoleRepository.find()
    }

    async findRoleByValue(value: RoleEnum): Promise<Role> {
        return this.userRoleRepository.findOneBy({value})
    }
}
