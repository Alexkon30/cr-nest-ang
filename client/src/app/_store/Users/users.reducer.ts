import { createReducer, on } from '@ngrx/store';

import { UsersApiActions } from './users.actions';
import { User } from '@app/_models';

export const initialState: User[] = [];

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.usersLoadedSuccess, (_state, {users}) => users)
);