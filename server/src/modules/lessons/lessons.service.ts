import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source } from 'src/generator/graphql.schema';
import { Between, Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async findAll(): Promise<Lesson[]> {
    return this.lessonRepository.find({
      relations: {
        teachers: true,
        groups: true,
        room: true
      },
    });
  }

  async find(
    start: string,
    end: string,
    source: Source,
    id: number,
  ): Promise<Lesson[]> {
    const filter = this.createFilter(source, id);
    return this.lessonRepository.find({
      where: {
        dateStart: Between(new Date(start), new Date(end)),
        ...filter,
      },
      relations: {
        teachers: true,
        groups: true,
        room: true
      },
    });
  }

  private createFilter(sourse: Source, id: number) {
    switch (sourse) {
      case 'GROUP':
        return {
          groups: {
            id,
          },
        };
      case 'TEACHER':
        return {
          teachers: {
            id,
          },
        };
      case 'ROOM':
        return {
          room: {
            id
          }
        }
    }
  }
}
