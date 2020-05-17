import { createAction, props } from '@ngrx/store';

import { Character, People, Starship } from '@app/clash/models';

export const changeCharacter = createAction(
  '[Clash Page] Change Character',
  props<{ character: Character }>()
);

export const loadPeople = createAction('[Clash Page] Load People');

export const loadPeopleSuccess = createAction(
  '[People Collection API] Load People Success',
  props<{ people: People[] }>()
);

export const loadPeopleFailure = createAction(
  '[People Collection API] Load People Failure'
);

export const loadStarships = createAction('[Clash Page] Load Starships');

export const loadStarshipsSuccess = createAction(
  '[Starships Collection API] Load Starships Success',
  props<{ starships: Starship[] }>()
);

export const loadStarshipsFailure = createAction(
  '[Starships Collection API] Load Starships Failure'
);
