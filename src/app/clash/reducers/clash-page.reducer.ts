import { createReducer, on } from '@ngrx/store';

import { ClashPageActions } from '@app/clash/actions';
import { Character } from '@app/clash/models';

export const clashPageFeatureKey = 'clashPage';

export interface State {
  loading: boolean;
  character: Character;
  characters: Character[];
}

export const initialState: State = {
  loading: false,
  character: null,
  characters: [
    {
      name: 'People',
      clashAttribute: 'mass',
      apiResource: 'people',
    },
    {
      name: 'Starships',
      clashAttribute: 'crew',
      apiResource: 'starships',
    },
  ],
};

export const reducer = createReducer(
  initialState,
  on(ClashPageActions.changeCharacter, (state, { character }) => ({
    ...state,
    loading: true,
    character,
  }))
);

export const getLoading = (state: State) => state.loading;
export const getCharacter = (state: State) => state.character;
export const getCharacters = (state: State) => state.characters;
