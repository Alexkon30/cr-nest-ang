import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Lesson } from "./lesson.entity";
import { LessonsResolver } from "./lessons.resolver";
import { LessonsService } from "./lessons.service";
import { LessonsController } from './lessons.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Lesson])],
    providers: [LessonsService, LessonsResolver],
    controllers: [LessonsController],
})
export class LessonsModule {}