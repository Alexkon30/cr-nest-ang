import { Injectable } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import { BehaviorSubject, Observable } from 'rxjs';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class SheduleService {
  private sheduleSubject: BehaviorSubject<Shedule>;
  public shedule: Observable<Shedule>;
  private emptyShedule: Shedule = [
    {
      title: 'monday',
      lessons: [],
    },
    {
      title: 'tuesday',
      lessons: [],
    },
    {
      title: 'wednesday',
      lessons: [],
    },
    {
      title: 'thursday',
      lessons: [],
    },
    {
      title: 'friday',
      lessons: [],
    },
    {
      title: 'saturday',
      lessons: [],
    },
    {
      title: 'sunday',
      lessons: [],
    },
  ]

  constructor() {
    this.sheduleSubject = new BehaviorSubject<Shedule>(this.emptyShedule);
    this.shedule = this.sheduleSubject.asObservable();
  }

  public get sheduleValue(): Shedule {
    return this.sheduleSubject.getValue();
  }

  clear() {
    this.sheduleSubject.next(this.emptyShedule);
  }
 
  createSheduleFromLessons(lessons: Lesson[]) {
    const shedule = JSON.parse(JSON.stringify(this.emptyShedule)) as Shedule;

    //sort by days of week
    lessons.forEach((lesson) => {
      let day = moment(lesson.dateStart).day();
      switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          shedule[day - 1].lessons.push(lesson);
          break;
        case 0:
          shedule[6].lessons.push(lesson);
          break;
        default:
          break;
      }
    });

    this.sheduleSubject.next(shedule);
  }
}
