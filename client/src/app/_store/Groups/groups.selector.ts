import { Group } from '@app/_models';
import { createFeatureSelector } from '@ngrx/store';

export const selectGroups = createFeatureSelector<Group[]>('groups');