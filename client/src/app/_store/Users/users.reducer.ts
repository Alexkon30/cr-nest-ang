import { createReducer, on } from '@ngrx/store';

import { UsersActions, UsersApiActions } from './users.actions';
import { User } from '@app/_models';
import _ from 'lodash';

export interface UsersState {
  users: User[],
}

export const initialState: UsersState = {
  users: [],
};

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.usersLoadedSuccess, (_state, {users}) => {
    let copy = _.cloneDeep(_state)
    copy.users = users
    return copy
  }),
);