import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { SwapiService } from '@app/clash/services';
import { ClashPageActions } from '@app/clash/actions';
import { resourceMap } from '@app/clash/utils';

@Injectable()
export class ClashPageEffects {
  changeCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClashPageActions.changeCharacter),
      map((action) => action.character.resourceName),
      map((resourceName) => resourceMap[resourceName].loadResources())
    )
  );

  loadPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClashPageActions.loadPeople),
      switchMap(() =>
        this.swapiService.getPeople().pipe(
          map((people) => ClashPageActions.loadPeopleSuccess({ people })),
          catchError((error) => of(ClashPageActions.loadPeopleFailure()))
        )
      )
    )
  );

  loadStarships$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ClashPageActions.loadStarships),
      switchMap(() =>
        this.swapiService.getStarships().pipe(
          map((starships) =>
            ClashPageActions.loadStarshipsSuccess({ starships })
          ),
          catchError((error) => of(ClashPageActions.loadStarshipsFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private swapiService: SwapiService) {}
}
