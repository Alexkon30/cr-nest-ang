import { Role, User } from '@app/_models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUsers = createFeatureSelector<User[]>('users');

export const selectTeachers = createSelector(selectUsers, (users) =>
  users.filter((user) =>
    user.orgUserRoles.some((orgRole) =>
      orgRole.roles.some((role) => role.value === Role.TEACHER)
    )
  )
);
