import { Query, Resolver } from "@nestjs/graphql";
import { GroupService } from "./group.service";

@Resolver()
export class GroupsResolver {
    constructor(private readonly groupsService: GroupService) {}

    @Query()
    groups() {
        return this.groupsService.getAllGroups()
    }
}