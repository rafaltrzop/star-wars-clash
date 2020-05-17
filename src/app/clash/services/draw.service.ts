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
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }
}
