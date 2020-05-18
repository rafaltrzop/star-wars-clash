export class DrawService {
  static getRandomPair<T>(array: T[]): [T, T] {
    const x = DrawService.getRandomItem<T>(array);
    const y = DrawService.getRandomItem<T>(array);
    return [x, y];
  }

  // TODO: it will return undefined for empty arrays, return null instead?
  static getRandomItem<T>(array: T[]): T {
    const min = 0;
    const max = array.length - 1;
    const index = DrawService.getRandomIntInclusive(min, max);
    return array[index];
  }

  static getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
