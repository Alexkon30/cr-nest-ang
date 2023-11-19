import { IStore } from '@app/_models';
import { createSelector } from '@ngrx/store';

const groupsState = (state: IStore) => state.groupsState

export const selectAllGroups = createSelector(groupsState, state => state.groups)

export const selectGroupById = (id: number) =>
  createSelector(groupsState, (state) => {
    return state.groups.find((group) => group.id === id);
  });
