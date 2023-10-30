import { createReducer, on } from '@ngrx/store';

import { RoomsApiActions } from './rooms.actions';
import { Room } from '@app/_models';

export const initialState: Room[] = [];

export const roomsReducer = createReducer(
  initialState,
  on(RoomsApiActions.retrievedRoomsList, (_state, {rooms}) => rooms)
);