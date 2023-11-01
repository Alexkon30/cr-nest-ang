import { Room } from '@app/_models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const RoomsApiActions = createActionGroup({
  source: 'Rooms API',
  events: {
    'Rooms Loaded Success': props<{rooms: Room[]}>(),
    'Load Rooms': emptyProps(),
  },
});
