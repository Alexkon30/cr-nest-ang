import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from './organization.entity';
import { OrganizationsResolver } from './organizations.resolver';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';

@Module({
  providers: [OrganizationsResolver, OrganizationsService],
  imports: [TypeOrmModule.forFeature([Organization])],
  exports: [OrganizationsService],
  controllers: [OrganizationsController]
})
export class OrganizationsModule {}
