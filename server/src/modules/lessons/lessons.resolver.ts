import { Args, Query, Resolver } from "@nestjs/graphql";
import { LessonsService } from "./lessons.service";

@Resolver()
export class LessonsResolver {
    constructor(
        private readonly lessonsService: LessonsService
    ) {}

    @Query()
    
    lessons(@Args('dateStart') dateStart: string, @Args('dateEnd') dateEnd: string) {
        return this.lessonsService.find(dateStart, dateEnd)
    }
}