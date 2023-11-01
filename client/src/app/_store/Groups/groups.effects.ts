import { Injectable } from '@angular/core';
import { GroupsService } from '@app/_services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { GroupsApiActions } from './groups.actions';

@Injectable()
export class GroupsEffects {
  constructor(
    private actions$: Actions,
    private groupService: GroupsService
  ) {}

  loadGroups$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsApiActions.loadGroups),
      exhaustMap(() =>
        this.groupService.getAllGroups().pipe(
          map((groups) => GroupsApiActions.groupsLoadedSuccess({ groups })),
          // catchError(() => of({ type: '[Groups API] Groups Loaded Error' }))
        )
      )
    )
  );
}
