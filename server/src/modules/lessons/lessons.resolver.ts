import { Args, Query, Resolver } from '@nestjs/graphql';
import { Source } from 'src/generator/graphql.schema';
import { LessonsService } from './lessons.service';

@Resolver()
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @Query()
  lessons(
    @Args('dateStart') dateStart: string,
    @Args('dateEnd') dateEnd: string,
    @Args('source') source: Source,
    @Args('id') id: number,
  ) {
    return this.lessonsService.find(dateStart, dateEnd, source, id);
  }
}
