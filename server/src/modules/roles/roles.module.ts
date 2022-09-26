import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './role.entity';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';
import { OrganizationUserRole } from '../org-user-roles/org-user-roles.entity';

@Module({
  providers: [RolesService, RolesResolver],
  imports: [TypeOrmModule.forFeature([UserRole, OrganizationUserRole])],
  exports: [RolesService]
})
export class RolesModule {}
