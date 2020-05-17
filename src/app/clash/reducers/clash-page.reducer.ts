import { createReducer, on } from '@ngrx/store';

import { ClashPageActions } from '@app/clash/actions';
import { Character, People, Starship } from '@app/clash/models';

export const clashPageFeatureKey = 'clashPage';

export interface State {
  loading: boolean;
  character: Character;
  characters: Character[];
  people: People[];
  starships: Starship[];
}

export const initialState: State = {
  loading: false,
  character: null,
  characters: [
    {
      name: 'People',
      resource: 'people',
      clashAttribute: 'mass',
    },
    {
      name: 'Starships',
      resource: 'starships',
      clashAttribute: 'crew',
    },
  ],
  people: [],
  starships: [],
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
    people,
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
    starships,
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
