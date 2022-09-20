import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUserRole } from './org-user-roles.entity';
import { OrgUserRolesResolver } from './org-user-roles.resolver';
import { OrgUserRolesService } from './org-user-roles.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationUserRole])],
  providers: [OrgUserRolesService, OrgUserRolesResolver],
  exports: [OrgUserRolesService]
})
export class OrgUserRolesModule {}
