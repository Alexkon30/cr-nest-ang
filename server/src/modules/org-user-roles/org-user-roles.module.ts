import { Module } from '@nestjs/common';
import { OrgUserRolesResolver } from './org-user-roles.resolver';
import { OrgUserRolesService } from './org-user-roles.service';

@Module({
  providers: [OrgUserRolesService, OrgUserRolesResolver]
})
export class OrgUserRolesModule {}
