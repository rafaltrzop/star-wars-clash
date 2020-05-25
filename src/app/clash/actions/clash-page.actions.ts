import { createAction, props } from '@ngrx/store';

import { Person, Starship } from '@app/clash/models';

export const changeCharacter = createAction(
  '[Clash Page] Change Character',
  props<{ character: string }>()
);

export const loadPeople = createAction('[Clash Page] Load People');

export const loadPeopleSuccess = createAction(
  '[People Collection API] Load People success',
  props<{ people: Person[] }>()
);

export const loadPeopleFailure = createAction(
  '[People Collection API] Load People failure'
);

export const loadStarships = createAction('[Clash Page] Load Starships');

export const loadStarshipsSuccess = createAction(
  '[Starships Collection API] Load Starships success',
  props<{ starships: Starship[] }>()
);

export const loadStarshipsFailure = createAction(
  '[Starships Collection API] Load Starships failure'
);

export const roundWonByPlayer1 = createAction(
  '[Clash Page] Round won by Player 1'
);

export const roundWonByPlayer2 = createAction(
  '[Clash Page] Round won by Player 2'
);

export const roundEndedWithTie = createAction(
  '[Clash Page] Round ended with a tie'
);
