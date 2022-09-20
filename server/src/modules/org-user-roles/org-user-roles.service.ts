import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-core';
import { Repository } from 'typeorm';
import { CreateOrgUserRoleDto } from './dto/create-org-user-role.dto';
import { OrganizationUserRole } from './org-user-roles.entity';

@Injectable()
export class OrgUserRolesService {
    constructor(
        @InjectRepository(OrganizationUserRole)
        private readonly orgUserRoleRepository: Repository<OrganizationUserRole>,
    ) {}
    
    async createOrgUserRole(dto: CreateOrgUserRoleDto): Promise<OrganizationUserRole | undefined> {
        try {
            const newOrgUserRole = this.orgUserRoleRepository.create(dto)
            await this.orgUserRoleRepository.save(newOrgUserRole)
    
            return newOrgUserRole
    
        } catch(err) {
            throw new ApolloError(err)
        }
    }
}
