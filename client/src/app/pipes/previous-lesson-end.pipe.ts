import { Pipe, PipeTransform } from '@angular/core';
import { Lesson } from '@app/_models';

@Pipe({
  name: 'addPreviousLessonEnd',
})
export class AddPreviousLessonEndPipe implements PipeTransform {
  transform(lessons: Lesson[]) {
    lessons.forEach((lesson, index) => {
      if (index === 0) {
        lesson.previousLessonEnd = lesson.dateStart.split('T')[0] + 'T07:30';
      } else {
        lesson.previousLessonEnd = lessons[index - 1].dateEnd;
      }
    });

    return lessons;
  }
}
