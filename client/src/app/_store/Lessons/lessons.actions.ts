import { Lesson, Source } from '@app/_models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
 
// export const LessonsActions = createActionGroup({
//   source: 'Lessons',
//   events: {},
// });
 
export const LessonsApiActions = createActionGroup({
  source: 'Lessons API',
  events: {
    'Lessons Loaded Success': props<{lessons: Lesson[]}>(),
    'Load Lessons': emptyProps(),
    'Load Lessons By Filters': props<{start: string, end: string, source: Source, id: number}>()
  },
});
