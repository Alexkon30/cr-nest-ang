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
        lesson.previousLessonEnd = moment(+lesson.dateStart).hours(7).minutes(30).valueOf().toString();
      } else {
        lesson.previousLessonEnd = lessons[index - 1].dateEnd;
      }
    });

    return lessons;
  }
}
