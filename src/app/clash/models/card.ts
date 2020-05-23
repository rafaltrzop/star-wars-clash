import { DrawService } from '@app/clash/services';
import { Person, Starship } from '@app/clash/models';

export abstract class Card<T> {
  readonly power: number;

  constructor(public readonly data: T) {
    this.power = this.calculatePower();
  }

  abstract get name(): string;

  protected abstract calculatePower(): number;

  protected getNumericValue(value: string): number {
    const [rangeMin, rangeMax] = value.replace(/,(?=\d{3})/g, '').split('-');

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
  constructor(public readonly data: Person) {
    super(data);
  }

  get name(): string {
    return this.data.name;
  }

  protected calculatePower(): number {
    return this.getNumericValue(this.data.mass);
  }
}

export class StarshipCard extends Card<Starship> {
  constructor(public readonly data: Starship) {
    super(data);
  }

  get name(): string {
    return this.data.name;
  }

  protected calculatePower(): number {
    return this.getNumericValue(this.data.crew);
  }
}
