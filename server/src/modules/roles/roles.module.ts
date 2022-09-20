import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRole } from './role.entity';
import { RolesService } from './roles.service';
import { RolesResolver } from './roles.resolver';

@Module({
  providers: [RolesService, RolesResolver],
  imports: [TypeOrmModule.forFeature([UserRole])],
  exports: [RolesService]
})
export class RolesModule {}
