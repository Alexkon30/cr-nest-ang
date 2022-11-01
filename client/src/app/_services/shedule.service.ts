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

  constructor() {
    this.sheduleSubject = new BehaviorSubject<Shedule>([]);
    this.shedule = this.sheduleSubject.asObservable();
  }

  public get sheduleValue(): Shedule {
    return this.sheduleSubject.getValue();
  }

  clear() {
    this.sheduleSubject.next([]);
  }

  createSheduleFromLessons(lessons: Lesson[]) {
    const lessonsCopy = JSON.parse(JSON.stringify(lessons)) as Lesson[];
    const newShedule: Shedule = [
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
    ];

    //sort in asc
    lessonsCopy.sort((a, b) => {
      if (moment(a.dateStart).isBefore(moment(b.dateStart))) {
        return -1;
      } else if (moment(a.dateStart).isAfter(moment(b.dateStart))) {
        return 1;
      } else {
        return 0;
      }
    });

    //sort by days of week
    lessonsCopy.forEach((lesson) => {
      let day = moment(lesson.dateStart).day();
      switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
          newShedule[day - 1].lessons.push(lesson);
          break;
        case 0:
          newShedule[6].lessons.push(lesson);
          break;
        default:
          break;
      }
    });

    //gap
    for (let day of newShedule) {
      day.lessons.forEach((lesson, index) => {
        if (index === 0) {
          lesson.previousLessonEnd = lesson.dateStart.split('T')[0] + 'T07:30';
        } else {
          lesson.previousLessonEnd = day.lessons[index - 1].dateEnd;
        }
      });
    }

    this.sheduleSubject.next(newShedule);
  }
}
