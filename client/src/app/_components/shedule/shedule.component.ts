import { Component, OnInit } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import { LessonsService } from '@app/_services';
import { Apollo } from 'apollo-angular';
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
  date: object;
  source: string;
  element: string;
  elements = ['11-IK', '11-IB', '11-KE'];

  constructor(private lessonsService: LessonsService) {}

  ngOnInit(): void {
    this.subscription = this.lessonsService.lessons.subscribe((lessons) => {
      this.lessons = lessons;
    });

    this.date = new Date();
    this.source = 'groups';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  show() {
    // console.log(moment(this.date).day(1).format('DD.MM.YYYY'), moment(this.date).day(7).format('DD.MM.YYYY'))
    // moment(this.date).day(7).format('DD.MM.YYYYTHH:mm')
    // console.log(moment(this.date).startOf('week').day());

    this.lessonsService.loadLessons()
    
    // console.log(moment().valueOf().toString())
  }

  set1() {
    // this.gqlService.getLessons()
    // this.lessonsService.loadLessons()
    this.lessonsService.setLessons([
      {
        dateStart: '2022-10-31T15:00',
        dateEnd: '2022-10-31T16:30',
        previousLessonEnd: ''
      },
      {
        dateStart: '2022-10-31T16:30',
        dateEnd: '2022-10-31T19:00',
        previousLessonEnd: ''
      },
      {
        dateStart: '2022-10-31T09:00',
        dateEnd: '2022-10-31T10:30',
        previousLessonEnd: ''
      },
    ]);
  }

  set2() {
    this.lessonsService.setLessons([
      {
        dateStart: '2022-11-01T14:00',
        dateEnd: '2022-11-01T15:30',
        previousLessonEnd: ''
      },
      {
        dateStart: '2022-11-01T15:30',
        dateEnd: '2022-11-01T18:00',
        previousLessonEnd: ''
      },
      {
        dateStart: '2022-11-01T08:00',
        dateEnd: '2022-11-01T09:30',
        previousLessonEnd: ''
      },
    ]);
}
}
