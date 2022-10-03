import { Controller, Get } from '@nestjs/common';
import { OrgUserRolesService } from './org-user-roles.service';

@Controller('org-user-roles')
export class OrgUserRolesController {
    constructor(
        private readonly orgUserRolesService: OrgUserRolesService
    ) {}

    @Get('all')
    async getAllOrganizations() {
        return this.orgUserRolesService.findAll()
    }
}
