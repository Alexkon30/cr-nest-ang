import { Component, OnInit } from '@angular/core';
import { Group, Lesson, Room, Shedule, User } from '@app/_models';
import { GroupsService, LessonsService, UsersService, RoleEnum } from '@app/_services';
import moment from 'moment';
import { Source } from '@app/_models/common';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less'],
})
export class SheduleComponent implements OnInit {
  lessons: Lesson[];
  date: moment.Moment;
  sourceType: Source;
  sourceId: number | string;
  teachers: User[];
  groups: Group[];
  rooms: Room[];

  constructor(
    private lessonsService: LessonsService,
    private usersService: UsersService,
    private groupsService: GroupsService
  ) {
    this.lessons = [];
    this.date = moment([2022, 10, 3])
    // this.date = moment();
    this.sourceType = 'GROUPS';
  }

  async ngOnInit(): Promise<void> {
    this.teachers = await this.usersService.getUsersByRole(RoleEnum.TEACHER);
    this.groups = await this.groupsService.getGroups()
  }

  async show(date: moment.Moment, source: Source, id: number | string) {
    // console.log({ date, source, id });

    const currentDate = date.hours(0).minutes(0);

    const firstDayOfWeek =
      currentDate.day() === 0
        ? currentDate.day(-6).format('YYYY-MM-DDTHH:mm') + 'Z'
        : currentDate.day(1).format('YYYY-MM-DDTHH:mm') + 'Z';
    const lastDayOfWeek =
      currentDate.day() === 0
        ? currentDate.hours(23).minutes(59).format('YYYY-MM-DDTHH:mm') + 'Z'
        : currentDate
            .day(8 - currentDate.day())
            .hours(23)
            .minutes(59)
            .format('YYYY-MM-DDTHH:mm') + 'Z';

    this.lessons = await this.lessonsService.getLessons(
      firstDayOfWeek,
      lastDayOfWeek
    );
  }
}
