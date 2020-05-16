import { createReducer, on } from '@ngrx/store';

import { ClashPageActions } from '@app/clash/actions';
import { Character } from '@app/clash/models';

export const clashPageFeatureKey = 'clashPage';

export interface State {
  character: Character;
  characters: Character[];
}

const people: Character = {
  name: 'People',
  clashAttribute: 'mass',
  apiResource: 'people',
};
const starships: Character = {
  name: 'Starships',
  clashAttribute: 'crew',
  apiResource: 'starships',
};
export const initialState: State = {
  character: people,
  characters: [people, starships],
};

export const reducer = createReducer(
  initialState,
  on(ClashPageActions.changeCharacter, (state, { character }) => ({
    ...state,
    character,
  }))
);

export const getCharacter = (state: State) => state.character;
export const getCharacters = (state: State) => state.characters;
