import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

import { Card, PersonCard, StarshipCard } from '@app/clash/models';
import { ClashPageActions } from '@app/clash/actions';

interface ResourceConfig<T> {
  loadResources: ActionCreator<string, () => TypedAction<string>>;
  getCard: (resource: T) => Card<T>;
}

export const resourceMap: { [key: string]: ResourceConfig<any> } = {
  people: {
    loadResources: ClashPageActions.loadPeople,
    getCard: (resource) => new PersonCard(resource),
  },
  starships: {
    loadResources: ClashPageActions.loadStarships,
    getCard: (resource) => new StarshipCard(resource),
  },
};
