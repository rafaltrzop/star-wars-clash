import { ClashPageActions } from '@app/clash/actions';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

import { People, Starship } from '@app/clash/models';
import { DrawService } from '@app/clash/services';

export abstract class Card<T> {
  constructor(protected resource: T) {}

  get data(): T {
    return this.resource;
  }

  abstract get name(): string;

  abstract clash(card: Card<T>): -1 | 0 | 1;

  protected getNumericValue(value: string): number {
    const [rangeMin, rangeMax] = value.replace(',', '').split('-');

    const min = Number(rangeMin);
    const max = Number(rangeMax);

    if (Number.isNaN(min)) {
      return NaN;
    } else if (Number.isNaN(max)) {
      return min;
    } else {
      return DrawService.getRandomIntInclusive(min, max);
    }
  }

  getWinner(value1: number, value2: number): -1 | 0 | 1 {
    if (value1 > value2) {
      return -1;
    } else if (value2 > value1) {
      return 1;
    } else {
      return 0;
    }
  }
}

class PeopleCard extends Card<People> {
  constructor(protected resource: People) {
    super(resource);
  }

  get name(): string {
    return this.data.name;
  }

  clash(card: Card<People>): -1 | 0 | 1 {
    const value1 = this.getNumericValue(this.data.mass);
    const value2 = this.getNumericValue(card.data.mass);
    return this.getWinner(value1, value2);
  }
}

class StarshipCard extends Card<Starship> {
  constructor(protected resource: Starship) {
    super(resource);
  }

  get name(): string {
    return this.data.name;
  }

  clash(card: Card<Starship>): -1 | 0 | 1 {
    const value1 = this.getNumericValue(this.data.crew);
    const value2 = this.getNumericValue(card.data.crew);
    return this.getWinner(value1, value2);
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
