import { Lesson } from '@app/_models';
import { createActionGroup, props } from '@ngrx/store';
 
// export const LessonsActions = createActionGroup({
//   source: 'Lessons',
//   events: {},
// });
 
export const LessonsApiActions = createActionGroup({
  source: 'Lessons API',
  events: {
    'Retrieved Lessons List': props<{lessons: Lesson[]}>(),
  },
});