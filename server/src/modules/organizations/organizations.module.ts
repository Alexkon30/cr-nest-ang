import { Module } from '@nestjs/common';
import { OrganizationsResolver } from './organizations.resolver';
import { OrganizationsService } from './organizations.service';

@Module({
  providers: [OrganizationsResolver, OrganizationsService]
})
export class OrganizationsModule {}