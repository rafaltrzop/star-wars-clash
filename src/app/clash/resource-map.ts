import { ClashPageActions } from '@app/clash/actions';
import { ActionCreator, TypedAction } from '@ngrx/store/src/models';

import { People, Starship } from '@app/clash/models';
import { DrawService } from '@app/clash/services';

export enum ClashWinner {
  Tie = 'TIE',
  Player1 = 'PLAYER1',
  Player2 = 'PLAYER2',
}

export abstract class Card<T> {
  protected cardPower: number;

  constructor(protected resource: T) {
    this.cardPower = this.calculatePower();
  }

  get data(): T {
    return this.resource;
  }

  get power(): number {
    return this.cardPower;
  }

  abstract get name(): string;

  clash(card: Card<T>): ClashWinner {
    return this.getClashWinner(this.power, card.power);
  }

  getClashWinner(value1: number, value2: number): ClashWinner {
    if (value1 > value2) {
      return ClashWinner.Player1;
    } else if (value2 > value1) {
      return ClashWinner.Player2;
    } else {
      return ClashWinner.Tie;
    }
  }

  protected abstract calculatePower(): number;

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
}

class PeopleCard extends Card<People> {
  constructor(protected resource: People) {
    super(resource);
  }

  get name(): string {
    return this.data.name;
  }

  protected calculatePower(): number {
    return this.getNumericValue(this.data.mass);
  }
}

class StarshipCard extends Card<Starship> {
  constructor(protected resource: Starship) {
    super(resource);
  }

  get name(): string {
    return this.data.name;
  }

  protected calculatePower(): number {
    return this.getNumericValue(this.data.crew);
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
