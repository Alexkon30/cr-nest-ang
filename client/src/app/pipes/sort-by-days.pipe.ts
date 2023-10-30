import { Pipe, PipeTransform } from '@angular/core';
import { Lesson, Shedule } from '@app/_models';
import moment from 'moment';

@Pipe({
  name: 'sortByDays'
})
export class SortByDaysPipe implements PipeTransform {
  transform(lessons: Lesson[], ...args: any[]): Shedule {
    const shedule: Shedule = [
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

    lessons.forEach((lesson) => {
      let day = moment(lesson.dateStart).day();
      if (day > 0) {
        shedule[day - 1].lessons.push(lesson);
      } else {
        shedule[6].lessons.push(lesson);
      }
    });

    return shedule;
  }
}
