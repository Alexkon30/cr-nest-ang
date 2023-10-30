import { Component, OnInit } from '@angular/core';
import { Group, Lesson, Room, User } from '@app/_models';
import { LessonsService } from '@app/_services';
import moment from 'moment';
import { Source } from '@app/_models/lesson';
import { AutoUnsub } from '@app/_helpers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLessons } from '@app/_store/Lessons/lessons.selectors';
import { selectGroups } from '@app/_store/Groups/groups.selector';
import { selectTeachers } from '@app/_store/Users/users.selector';
import { selectRooms } from '@app/_store/Rooms/rooms.selector';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less'],
})
// @AutoUnsub()
export class SheduleComponent implements OnInit {
  lessons$: Observable<Lesson[]> = this.lessonsStore.select(selectLessons)
  groups$: Observable<Group[]> = this.groupsStore.select(selectGroups)
  teachers$: Observable<User[]> = this.usersStore.select(selectTeachers)
  rooms$: Observable<Room[]> = this.roomsStore.select(selectRooms)
  date: moment.Moment;
  sourceType = Source.GROUPS;
  sourceId: number;

  constructor(
    private lessonsService: LessonsService,
    private lessonsStore: Store<Lesson[]>,
    private groupsStore: Store<Group[]>,
    private usersStore: Store<User[]>,
    private roomsStore: Store<User[]>
  ) {
    this.date = moment([2022, 10, 3])
    // this.date = moment();
  }

  async ngOnInit(): Promise<void> {
    this.lessonsStore.select(selectLessons).subscribe(data => {
      console.log(data)
    })
  }

  async show(date: moment.Moment, source: Source, sourceId: number) {
    console.log({ date, source, sourceId });

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

    // this.lessons = await this.lessonsService.getLessons(
    //   firstDayOfWeek,
    //   lastDayOfWeek
    // );
  }
}
