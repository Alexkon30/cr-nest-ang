import { Injectable } from '@angular/core';
import { RoomsService } from '@app/_services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { RoomsApiActions } from './rooms.actions';

@Injectable()
export class RoomsEffects {
  constructor(
    private actions$: Actions,
    private roomsService: RoomsService
  ) {}

  loadRooms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RoomsApiActions.loadRooms),
      exhaustMap(() =>
        this.roomsService.getAllRooms().pipe(
          map((rooms) => RoomsApiActions.roomsLoadedSuccess({ rooms })),
          // catchError(() => of({ type: '[Rooms API] Rooms Loaded Error' }))
        )
      )
    )
  );
}
