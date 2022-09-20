import { Query, Resolver } from '@nestjs/graphql';
import { UserRole } from './role.entity';
import { RolesService } from './roles.service';

@Resolver()
export class RolesResolver {
    constructor(
        private readonly roleService: RolesService
    ) {}

    @Query()
    roles(): Promise<UserRole[]> {
        return this.roleService.findAll()
    }

}
