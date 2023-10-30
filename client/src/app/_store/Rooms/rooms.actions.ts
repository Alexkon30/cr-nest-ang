import { Room } from '@app/_models';
import { createActionGroup, props } from '@ngrx/store';

export const RoomsApiActions = createActionGroup({
  source: 'Rooms API',
  events: {
    'Retrieved Rooms List': props<{ rooms: Room[] }>(),
  },
});
