import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApolloError } from 'apollo-server-core';
import { CreateOrganizationInput } from 'src/generator/graphql.schema';
import { Repository } from 'typeorm';
import { Organization } from './organization.entity';

@Injectable()
export class OrganizationsService {
    constructor(
        @InjectRepository(Organization)
        private readonly organizationRepository: Repository<Organization>
    ) {}

    async findOrganizationById(id: string): Promise<Organization> {
        return this.organizationRepository.findOneBy({_id: id})
    }

    async createOrganization(input: CreateOrganizationInput): Promise<Organization | undefined> {
        try {
            const newOrganization = this.organizationRepository.create(input)
            await this.organizationRepository.save(newOrganization)

            return newOrganization

        } catch(err) {
            throw new ApolloError(err)
        }
    }
}
