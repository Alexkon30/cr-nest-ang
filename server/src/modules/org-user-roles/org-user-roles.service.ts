import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-core';
import { InsertResult, Repository } from 'typeorm';
import { Organization } from '../organizations/organization.entity';
import { User } from '../users/user.entity';
import { UpdateOrgUserRoleDto } from './dto/create-org-user-role.dto';
import { OrganizationUserRole } from './org-user-roles.entity';

@Injectable()
export class OrgUserRolesService {
    constructor(
        @InjectRepository(OrganizationUserRole)
        private readonly orgUserRoleRepository: Repository<OrganizationUserRole>,
    ) {}

    async findAll(): Promise<OrganizationUserRole[]> {
        return this.orgUserRoleRepository.find({
            relations: {
                // organization: true,
                // user: true,
                roles: true
            }
        })
    }
    
    async updateOrgUserRole(dto: UpdateOrgUserRoleDto): Promise<string> {
        try {
            const existedOrgUserRole = await this.orgUserRoleRepository.findOneBy({ 
                // organization: dto.organization,
                // user: dto.user
            })

            if(existedOrgUserRole) {
                existedOrgUserRole.roles = dto.roles
                await this.orgUserRoleRepository.save(existedOrgUserRole)
            } else {
                const newOrgUserRoles = this.orgUserRoleRepository.create(dto)
                await this.orgUserRoleRepository.save(newOrgUserRoles)
            }


            // const result = await this.orgUserRoleRepository.upsert(dto, {
            //     conflictPaths: ['user'],
            //     skipUpdateIfNoValuesChanged: true
            // })

            // console.log(result)
    
            return 'ok'
    
        } catch(err) {
            throw new ApolloError(err)
        }
    }
}
