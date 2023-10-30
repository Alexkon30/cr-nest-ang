import { Lesson } from '@app/_models';
import { createFeatureSelector } from '@ngrx/store';

export const selectLessons = createFeatureSelector<Lesson[]>('lessons');