import { createReducer, on } from '@ngrx/store';

import { LessonsApiActions } from './lessons.actions';
import { Lesson } from '@app/_models';

const initialState: Lesson[] = [];

export const lessonsReducer = createReducer(
  initialState,
  on(LessonsApiActions.lessonsLoadedSuccess, (_state, {lessons}) => lessons)
);