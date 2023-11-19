import { createReducer, on } from '@ngrx/store';

import { GroupsApiActions } from './groups.actions';
import { Group } from '@app/_models';
import _ from 'lodash';

export interface GroupState {
  groups: Group[],
  // current: Group
}

const initialState: GroupState = {
  groups: [],
  // current: null
}

export const groupsReducer = createReducer(
  initialState,
  on(GroupsApiActions.groupsLoadedSuccess, (_state, {groups}) => {
    let copy = _.cloneDeep(_state)
    copy.groups = groups
    return copy
  })
);