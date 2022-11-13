import { Component, OnInit } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import { LessonsService } from '@app/_services';
import { Subscription } from 'rxjs';
import moment from 'moment';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.less'],
})
export class SheduleComponent implements OnInit {
  lessons: Lesson[];
  subscription: Subscription;
  date: Date;
  source: string;
  element: string;
  elements = ['11-IK', '11-IB', '11-KE'];

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.subscription = this.lessonsService.lessons.subscribe((lessons) => {
      this.lessons = lessons;
    });

    // this.date = new Date();
    this.date = new Date(2022, 10, 3);
    this.source = 'groups';

    this.show(this.date);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show(date: Date) {
    const currentDate = moment(date).hours(0).minutes(0);

    const firstDayOfWeek =
      currentDate.day() === 0
        ? currentDate.day(-6).format('YYYY-MM-DDTHH:mm')
        : currentDate.day(1).format('YYYY-MM-DDTHH:mm');
    const lastDayOfWeek =
      currentDate.day() === 0
        ? currentDate.hours(23).minutes(59).format('YYYY-MM-DDTHH:mm')
        : currentDate
            .day(8 - currentDate.day())
            .hours(23)
            .minutes(59)
            .format('YYYY-MM-DDTHH:mm');

    this.lessonsService.loadLessons(firstDayOfWeek, lastDayOfWeek);
  }

  set1() {
    this.lessonsService.setLessons([
      {
        dateStart: '2022-10-31T15:00',
        dateEnd: '2022-10-31T16:30',
        previousLessonEnd: '',
      },
      {
        dateStart: '2022-10-31T16:30',
        dateEnd: '2022-10-31T19:00',
        previousLessonEnd: '',
      },
      {
        dateStart: '2022-10-31T09:00',
        dateEnd: '2022-10-31T10:30',
        previousLessonEnd: '',
      },
    ]);
  }

  set2() {
    this.lessonsService.setLessons([
      {
        dateStart: '2022-11-01T14:00',
        dateEnd: '2022-11-01T15:30',
        previousLessonEnd: '',
      },
      {
        dateStart: '2022-11-01T15:30',
        dateEnd: '2022-11-01T18:00',
        previousLessonEnd: '',
      },
      {
        dateStart: '2022-11-01T08:00',
        dateEnd: '2022-11-01T09:30',
        previousLessonEnd: '',
      },
    ]);
  }
}
