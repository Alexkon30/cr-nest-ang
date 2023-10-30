import { User } from '@app/_models';
import { createActionGroup, props } from '@ngrx/store';

 
export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieved Users List': props<{users: User[]}>(),
  },
});