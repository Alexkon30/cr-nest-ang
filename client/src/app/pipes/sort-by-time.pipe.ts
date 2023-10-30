import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from '@app/_models';
import moment from 'moment';

@Pipe({
  name: 'sortByTime',
})
export class SortByTimePipe implements PipeTransform {
  transform(lessons: Lesson[]) {
    lessons.sort((a, b) => {
      if (moment(a.dateStart).isBefore(moment(b.dateStart))) {
        return -1;
      } else if (moment(a.dateStart).isAfter(moment(b.dateStart))) {
        return 1;
      } else {
        return 0;
      }
    });

    return lessons;
  }
}
