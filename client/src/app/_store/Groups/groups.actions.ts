import { Group } from '@app/_models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

 
export const GroupsApiActions = createActionGroup({
  source: 'Lessons API',
  events: {
    'Groups Loaded Success': props<{groups: Group[]}>(),
    'Load Groups': emptyProps(),
  },
});