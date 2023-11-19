import { IStore, Role } from '@app/_models';
import { createSelector } from '@ngrx/store';
import { selectRouteParams } from '../Router/router.selector';

const usersState = (state: IStore) => state.usersState;

export const selectUserById = (id: number) =>
  createSelector(usersState, (state) => {
    const user = state.users.find((user) => user.id === id);
    return user;
  });

export const selectUsersByRole = (searchRole: Role) =>
  createSelector(usersState, (state) => {
    return state.users.filter((user) =>
      user.roles.some((role) => role.value === searchRole)
    );
  });

export const selectUserByUrl = createSelector(
  usersState,
  selectRouteParams,
  (state, params) => {
    const user = state.users.find((user) => user.id === Number(params.id))
    // console.log({user})
    return user;
  }
);
