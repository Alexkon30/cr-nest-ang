import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Between, Equal, Repository } from "typeorm";
import { Lesson } from "./lesson.entity";

@Injectable()
export class LessonsService {
    constructor(
        @InjectRepository(Lesson)
        private readonly lessonRepository: Repository<Lesson>,
    ) {}

    async findAll(): Promise<Lesson[]> {
        return this.lessonRepository.find()
    }

    async find(start?: string, end?: string): Promise<Lesson[]> {
        return this.lessonRepository.find({
            where: {
                dateStart: Between(
                    new Date('2022-10-31T14:00'), 
                    new Date('2022-10-31T17:00'))
            }
        })  
    }
}