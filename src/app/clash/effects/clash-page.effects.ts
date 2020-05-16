import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { ClashPageActions } from '@app/clash/actions';

@Injectable()
export class ClashPageEffects {
  changeCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClashPageActions.changeCharacter),
      map((action) => action.character.resource),
      map((resource) => {
        const resourceActionMap = {
          people: ClashPageActions.loadPeople,
          starships: ClashPageActions.loadStarships,
        };

        return resourceActionMap[resource]();
      })
    )
  );

  loadPeople$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ClashPageActions.loadPeople),
        tap(() => {
          // TODO
          console.log('LOAD PEOPLE');
        })
      ),
    { dispatch: false }
  );

  loadStarships$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ClashPageActions.loadStarships),
        tap(() => {
          // TODO
          console.log('LOAD STARSHIPS');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
