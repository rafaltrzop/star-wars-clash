import { createAction, props } from '@ngrx/store';

import { Character } from '@app/clash/models';

export const changeCharacter = createAction(
  '[Clash Page] Change Character',
  props<{ character: Character }>()
);

export const loadPeople = createAction('[Clash Page] Load People');

export const loadStarships = createAction('[Clash Page] Load Starships');
