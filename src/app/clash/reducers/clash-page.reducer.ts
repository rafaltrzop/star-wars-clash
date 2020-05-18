import { createReducer, on } from '@ngrx/store';

import { ClashPageActions } from '@app/clash/actions';
import { Character } from '@app/clash/models';

export const clashPageFeatureKey = 'clashPage';

export interface State {
  loading: boolean;
  character: Character;
  characters: Character[];
  resources: unknown[];
}

export const initialState: State = {
  loading: false,
  character: null,
  characters: [
    {
      name: 'People',
      resourceName: 'people',
    },
    {
      name: 'Starships',
      resourceName: 'starships',
    },
  ],
  resources: [],
};

export const reducer = createReducer(
  initialState,
  on(ClashPageActions.changeCharacter, (state, { character }) => ({
    ...state,
    character,
  })),
  on(ClashPageActions.loadPeople, (state) => ({
    ...state,
    loading: true,
  })),
  on(ClashPageActions.loadPeopleSuccess, (state, { people }) => ({
    ...state,
    resources: people,
    loading: false,
  })),
  on(ClashPageActions.loadPeopleFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(ClashPageActions.loadStarships, (state) => ({
    ...state,
    loading: true,
  })),
  on(ClashPageActions.loadStarshipsSuccess, (state, { starships }) => ({
    ...state,
    resources: starships,
    loading: false,
  })),
  on(ClashPageActions.loadPeopleFailure, (state) => ({
    ...state,
    loading: false,
  }))
);

export const getLoading = (state: State) => state.loading;
export const getCharacter = (state: State) => state.character;
export const getCharacters = (state: State) => state.characters;
export const getResources = (state: State) => state.resources;
