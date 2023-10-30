import { Group } from '@app/_models';
import { createActionGroup, props } from '@ngrx/store';

 
export const GroupsApiActions = createActionGroup({
  source: 'Groups API',
  events: {
    'Retrieved Groups List': props<{groups: Group[]}>(),
  },
});