import { Injectable } from '@angular/core';
import { UsersService } from '@app/_services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { UsersApiActions } from './users.actions';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersApiActions.loadUsers),
      exhaustMap(() =>
        this.usersService.getAllUsers().pipe(
          map((users) => UsersApiActions.usersLoadedSuccess({ users })),
          // catchError(() => of({ type: '[Users API] Users Loaded Error' }))
        )
      )
    )
  );
}
