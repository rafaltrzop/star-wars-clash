import { DrawService } from '@app/clash/services';
import { Person, Starship } from '@app/clash/models';

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

export class PersonCard extends Card<Person> {
  constructor(protected resource: Person) {
    super(resource);
  }

  get name(): string {
    return this.data.name;
  }

  protected calculatePower(): number {
    return this.getNumericValue(this.data.mass);
  }
}

export class StarshipCard extends Card<Starship> {
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
