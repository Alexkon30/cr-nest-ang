import { Group } from '@app/_models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectGroups = createFeatureSelector<Group[]>('groups');

export const selectGroupById = (id: number) => 
  createSelector(selectGroups, groups => {
    return groups.find(group => group.id === id)
  })