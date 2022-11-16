import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from '@app/_models';
import moment from 'moment';

@Pipe({
  name: 'addPreviousLessonEnd',
})
export class AddPreviousLessonEndPipe implements PipeTransform {
  transform(lessons: Lesson[]) {
    lessons.forEach((lesson, index) => {
      if (index === 0) {
        lesson.previousLessonEnd = moment(moment(+lesson.dateStart).toISOString().split('T')[0] + 'T07:30Z').valueOf().toString();
      } else {
        lesson.previousLessonEnd = lessons[index - 1].dateEnd;
      }
    });

    return lessons;
  }
}
