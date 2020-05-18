import { ClashPageActions } from '@app/clash/actions';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

import { People, Starship } from '@app/clash/models';

export abstract class Card<T> {
  protected abstract clashAttribute: string;

  constructor(protected resource: T) {}

  get data(): T {
    return this.resource;
  }

  // TODO: return -1, 0, 1?
  abstract clash(card: Card<T>): boolean;

  // TODO: use in clash() method
  protected getClashAttributeValue(value: string): number {
    value = '12.34-56,789';

    value.replace(',', '');
    const [min, max] = value.split('-');

    // TODO: could be NaN for "unknown"
    const minInt = Number(min);
    // TODO: could be undefined if no range ("30-100"), use minInt?
    const maxInt = max ? Number(max) : minInt;

    return 123456;
  }
}

class PeopleCard extends Card<People> {
  protected clashAttribute = 'mass';

  constructor(protected card: People) {
    super(card);
  }

  // TODO
  clash(): boolean {
    return true;
  }
}

class StarshipCard extends Card<Starship> {
  protected clashAttribute = 'mass';

  constructor(protected card: Starship) {
    super(card);
  }

  // TODO
  clash(): boolean {
    return false;
  }
}

interface ResourceConfig<T> {
  loadResources: ActionCreator<string, () => TypedAction<string>>;
  getCard: (resource: T) => Card<T>;
}

export const resourceMap: { [key: string]: ResourceConfig<any> } = {
  people: {
    loadResources: ClashPageActions.loadPeople,
    getCard: (resource) => new PeopleCard(resource),
  },
  starships: {
    loadResources: ClashPageActions.loadStarships,
    getCard: (resource) => new StarshipCard(resource),
  },
};
