import { createReducer, on } from '@ngrx/store';

import { ClashPageActions } from '@app/clash/actions';
import { Character, Player } from '@app/clash/models';

export const clashPageFeatureKey = 'clashPage';

export interface State {
  loading: boolean;
  character: string;
  characters: Character[];
  resources: unknown[];
  players: [Player, Player];
}

export const initialState: State = {
  loading: false,
  character: null,
  characters: [
    {
      name: 'Person',
      resourceName: 'people',
    },
    {
      name: 'Starship',
      resourceName: 'starships',
    },
  ],
  resources: [],
  players: [
    {
      name: 'Player 1',
      score: 0,
      winner: false,
      tie: false,
    },
    {
      name: 'Player 2',
      score: 0,
      winner: false,
      tie: false,
    },
  ],
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
  })),
  on(ClashPageActions.roundWonByPlayer1, (state) => {
    const player1 = state.players[0];
    const player2 = state.players[1];

    return {
      ...state,
      players: [
        {
          ...player1,
          score: player1.score + 1,
          winner: true,
          tie: false,
        },
        {
          ...player2,
          winner: false,
          tie: false,
        },
      ],
    };
  }),
  on(ClashPageActions.roundWonByPlayer2, (state) => {
    const player1 = state.players[0];
    const player2 = state.players[1];

    return {
      ...state,
      players: [
        {
          ...player1,
          winner: false,
          tie: false,
        },
        {
          ...player2,
          score: player2.score + 1,
          winner: true,
          tie: false,
        },
      ],
    };
  }),
  on(ClashPageActions.roundEndedWithTie, (state) => ({
    ...state,
    players: state.players.map((player) => ({
      ...player,
      winner: false,
      tie: true,
    })),
  }))
);

export const getLoading = (state: State) => state.loading;
export const getCharacter = (state: State) => state.character;
export const getCharacters = (state: State) => state.characters;
export const getResources = (state: State) => state.resources;
export const getPlayers = (state: State) => state.players;
