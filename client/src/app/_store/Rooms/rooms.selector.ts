import { Room } from '@app/_models';
import { createFeatureSelector } from '@ngrx/store';

export const selectRooms = createFeatureSelector<Room[]>('rooms');
