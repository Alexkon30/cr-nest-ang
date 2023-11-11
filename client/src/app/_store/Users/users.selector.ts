import { Role, User } from '@app/_models';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectUsers = createFeatureSelector<User[]>('users');

export const selectTeachers = createSelector(selectUsers, (users) => {
  return users.filter((user) =>
    user.roles.some((role) => role.value === Role.TEACHER)
  );
});

export const selectUserById = (id: number) => 
  createSelector(selectUsers, (users) => {
    return users.find(user => user.id === id)
  })

