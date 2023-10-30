import { Controller, Get } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('lessons')
export class LessonsController {
  constructor(
    private readonly lessonsService: LessonsService
  ) {}

  @Get('all')
  async getAllLessons() {
    return this.lessonsService.findAll()
  }
}
