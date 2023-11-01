import { User } from '@app/_models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Users Loaded Success': props<{users: User[]}>(),
    'Load Users': emptyProps(),
  },
});
