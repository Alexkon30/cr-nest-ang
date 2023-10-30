import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from '@app/_models';
import moment from 'moment';

@Pipe({
  name: 'addPreviousLessonEnd',
})
export class AddPreviousLessonEndPipe implements PipeTransform {
  transform(lessons: Lesson[]) {
    return lessons.map((lesson, index) => {
      if (index === 0) {
        return {...lesson, previousLessonEnd: moment(lesson.dateStart).toISOString().split('T')[0] + 'T07:30Z'};
      } else {
        return {...lesson, previousLessonEnd: lessons[index - 1].dateEnd}
      }
    });
  }
}
