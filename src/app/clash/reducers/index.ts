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
export const getClashPageLoading = createSelector(
  selectClashPageState,
  fromClashPage.getLoading
);
export const getClashPageCharacter = createSelector(
  selectClashPageState,
  fromClashPage.getCharacter
);
export const getClashPageCharacters = createSelector(
  selectClashPageState,
  fromClashPage.getCharacters
);
export const getClashPageResources = createSelector(
  selectClashPageState,
  fromClashPage.getResources
);
