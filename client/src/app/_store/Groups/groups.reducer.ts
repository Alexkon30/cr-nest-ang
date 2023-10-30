import { createReducer, on } from '@ngrx/store';

import { GroupsApiActions } from './groups.actions';
import { Group } from '@app/_models';

const initialState: Group[] = [];

export const groupsReducer = createReducer(
  initialState,
  on(GroupsApiActions.retrievedGroupsList, (_state, {groups}) => groups)
);