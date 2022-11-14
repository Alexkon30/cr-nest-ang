import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Group } from "./group.entity";

@Injectable()
export class GroupService {
    constructor(
        @InjectRepository(Group)
        private readonly lessonRepository: Repository<Group>,
    ) {}

    getAllGroups(): Promise<Group[]> {
        return this.lessonRepository.find({
            relations: {
                students: true
            }
        })
    }
}