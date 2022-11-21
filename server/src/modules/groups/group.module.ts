import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroupController } from "./group.controller";
import { Group } from "./group.entity";
import { GroupsResolver } from "./group.resolver";
import { GroupService } from "./group.service";

@Module({
    imports: [TypeOrmModule.forFeature([Group])],
    providers: [GroupService, GroupsResolver],
    controllers: [GroupController]
})
export class GroupsModule {}