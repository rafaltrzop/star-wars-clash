import { DrawService } from '@app/clash/services';

describe('DrawService', () => {
  describe('.getRandomPair', () => {
    // todo
  });

  describe('.getRandomItem', () => {
    // todo
  });

  describe('.getRandomIntInclusive', () => {
    it('should return integer from a given range', () => {
      const min = 5;
      const max = 10;
      const random = DrawService.getRandomIntInclusive(min, max);
      const randomInt = Number.parseInt(`${random}`, 10);

      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      expect(random).toBe(randomInt);
    });

    it('should return integer from a given range', () => {
      const min = -10;
      const max = -5;
      const random = DrawService.getRandomIntInclusive(min, max);
      const randomInt = Number.parseInt(`${random}`, 10);

      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      expect(random).toBe(randomInt);
    });

    it('should return integer from a given range', () => {
      const min = 2.54;
      const max = 30.48;
      const random = DrawService.getRandomIntInclusive(min, max);
      const randomInt = Number.parseInt(`${random}`, 10);

      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      expect(random).toBe(randomInt);
    });

    it('should return integer from a given range', () => {
      const min = -30.48;
      const max = -2.54;
      const random = DrawService.getRandomIntInclusive(min, max);
      const randomInt = Number.parseInt(`${random}`, 10);

      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      expect(random).toBe(randomInt);
    });

    it('should return integer from a given range', () => {
      const min = 0;
      const max = 0;
      const random = DrawService.getRandomIntInclusive(min, max);
      const randomInt = Number.parseInt(`${random}`, 10);

      expect(random).toBeGreaterThanOrEqual(min);
      expect(random).toBeLessThanOrEqual(max);
      expect(random).toBe(randomInt);
    });

    it('should throw RangeError ', () => {
      const min = 1.1;
      const max = 1.1;

      expect(() => {
        DrawService.getRandomIntInclusive(min, max);
      }).toThrowError(RangeError);
    });

    it('should throw RangeError ', () => {
      const min = -1.1;
      const max = -1.1;

      expect(() => {
        DrawService.getRandomIntInclusive(min, max);
      }).toThrowError(RangeError);
    });
  });
});
