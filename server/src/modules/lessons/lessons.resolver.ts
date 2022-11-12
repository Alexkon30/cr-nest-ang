import { Args, Query, Resolver } from "@nestjs/graphql";
import { LessonsService } from "./lessons.service";

@Resolver()
export class LessonsResolver {
    constructor(
        private readonly lessonsService: LessonsService
    ) {}

    @Query()
    
    lessons(@Args('dateStart') dateStart: string, @Args('dateEnd') dateEnd: string) {
        console.log(dateStart, dateEnd)
        return this.lessonsService.find()
    }
}