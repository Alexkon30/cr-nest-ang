import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../roles/role.entity';
import { OrganizationUserRole } from './org-user-roles.entity';
import { OrgUserRolesResolver } from './org-user-roles.resolver';
import { OrgUserRolesService } from './org-user-roles.service';
import { OrgUserRolesController } from './org-user-roles.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OrganizationUserRole, Role])],
  providers: [OrgUserRolesService, OrgUserRolesResolver],
  exports: [OrgUserRolesService],
  controllers: [OrgUserRolesController]
})
export class OrgUserRolesModule {}
