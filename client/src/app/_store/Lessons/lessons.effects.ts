import { Injectable } from '@angular/core';
import { LessonsService } from '@app/_services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { LessonsApiActions } from './lessons.actions';

@Injectable()
export class LessonsEffects {
  constructor(
    private actions$: Actions,
    private lessonsService: LessonsService
  ) {}

  loadLessons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LessonsApiActions.loadLessons),
      exhaustMap(() =>
        this.lessonsService.getAllLessons().pipe(
          map((lessons) => LessonsApiActions.lessonsLoadedSuccess({ lessons })),
          // catchError(() => of({ type: '[Lessons API] Lessons Loaded Error' }))
        )
      )
    )
  );
}
