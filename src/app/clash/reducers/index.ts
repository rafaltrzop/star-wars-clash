import {
  Action,
  combineReducers,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromClashPage from '@app/clash/reducers/clash-page.reducer';

export const clashFeatureKey = 'clash';

export interface ClashState {
  [fromClashPage.clashPageFeatureKey]: fromClashPage.State;
}

export interface State {
  [clashFeatureKey]: ClashState;
}

export function reducers(state: ClashState | undefined, action: Action) {
  return combineReducers({
    [fromClashPage.clashPageFeatureKey]: fromClashPage.reducer,
  })(state, action);
}

export const selectClashState = createFeatureSelector<State, ClashState>(
  clashFeatureKey
);

export const selectClashPageState = createSelector(
  selectClashState,
  (state: ClashState) => state[fromClashPage.clashPageFeatureKey]
);
export const getCharacter = createSelector(
  selectClashPageState,
  fromClashPage.getCharacter
);
export const getCharacters = createSelector(
  selectClashPageState,
  fromClashPage.getCharacters
);
