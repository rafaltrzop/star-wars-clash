import { createAction, props } from '@ngrx/store';

import { Character } from '@app/clash/models';

export const changeCharacter = createAction(
  '[Clash Page] Change character',
  props<{ character: Character }>()
);
