import { Query, Resolver } from '@nestjs/graphql';
import { Role } from './role.entity';
import { RolesService } from './roles.service';

@Resolver()
export class RolesResolver {
    constructor(
        private readonly roleService: RolesService
    ) {}

    @Query()
    roles(): Promise<Role[]> {
        return this.roleService.findAll()
    }

}
