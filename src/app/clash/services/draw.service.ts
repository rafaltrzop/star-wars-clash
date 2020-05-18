import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawService {
  getRandomPair<T>(array: T[]): [T, T] {
    const x = this.getRandomItem<T>(array);
    const y = this.getRandomItem<T>(array);
    return [x, y];
  }

  // TODO: it will return undefined for empty arrays, return null instead?
  getRandomItem<T>(array: T[]): T {
    const min = 0;
    const max = array.length - 1;
    const index = this.getRandomIntInclusive(min, max);
    return array[index];
  }

  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
