import { Component } from '@angular/core';
import { Group, Lesson, Room, User, Source, IStore, Role } from '@app/_models';
import moment from 'moment';
import { AutoUnsub } from '@app/_helpers';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectLessons } from '@app/_store/Lessons/lessons.selectors';
import { selectAllGroups } from '@app/_store/Groups/groups.selector';
import { selectUsersByRole } from '@app/_store/Users/users.selector';
import { selectRooms } from '@app/_store/Rooms/rooms.selector';
import { LessonsApiActions } from '@app/_store/Lessons/lessons.actions';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less'],
})
// @AutoUnsub()
export class SheduleComponent {
  lessons$: Observable<Lesson[]> = this.store.select(selectLessons);
  groups$: Observable<Group[]> = this.store.select(selectAllGroups);
  teachers$: Observable<User[]> = this.store.select(selectUsersByRole(Role.TEACHER));
  rooms$: Observable<Room[]> = this.store.select(selectRooms);
  date: moment.Moment;
  sourceType = Source.GROUP;
  teacherId: number;
  groupId: number;
  roomId: number;

  constructor(
    // private lessonsService: LessonsService,
    private store: Store<IStore>
  ) {
    this.date = moment([2022, 10, 3]);
    // this.date = moment();
  }

  show(date: moment.Moment, source: Source, sourceId: number) {
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

    this.store.dispatch(
      LessonsApiActions.loadLessonsByFilters({
        start: firstDayOfWeek,
        end: lastDayOfWeek,
        source,
        id: sourceId,
      })
    );
  }

  get sourceId() {
    switch (this.sourceType) {
      case Source.GROUP:
        return this.groupId;
      case Source.TEACHER:
        return this.teacherId;
      case Source.ROOM:
        return this.roomId;
      default:
        return null
    }
  }
}
