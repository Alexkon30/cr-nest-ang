import { Controller, Get } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
    constructor(
        private readonly organizationsService: OrganizationsService
    ) {}

    @Get('all')
    async getAllOrganizations() {
        return this.organizationsService.findAll()
    }
}
