import { DrawService } from '@app/clash/services';

describe('DrawService', () => {
  describe('.getRandomPair', () => {
    it('should return random pair of items from array', () => {
      const array = ['foo', 'bar', 'baz'];
      const [item1, item2] = DrawService.getRandomPair(array);

      expect(array).toContain(item1);
      expect(array).toContain(item2);
    });
  });

  describe('.getRandomItem', () => {
    it('should return random item from array', () => {
      const array = ['foo', 'bar', 'baz'];
      const randomItem = DrawService.getRandomItem(array);

      expect(array).toContain(randomItem);
    });
  });

  describe('.getRandomIntInclusive', () => {
    describe('when numbers range is a positive integer', () => {
      it('should return positive integer from a given range', () => {
        const min = 5;
        const max = 10;
        const random = DrawService.getRandomIntInclusive(min, max);
        const randomInt = Number.parseInt(`${random}`, 10);

        expect(random).toBeGreaterThanOrEqual(min);
        expect(random).toBeLessThanOrEqual(max);
        expect(random).toBe(randomInt);
      });
    });

    describe('when numbers range is a negative integer', () => {
      it('should return negative integer from a given range', () => {
        const min = -10;
        const max = -5;
        const random = DrawService.getRandomIntInclusive(min, max);
        const randomInt = Number.parseInt(`${random}`, 10);

        expect(random).toBeGreaterThanOrEqual(min);
        expect(random).toBeLessThanOrEqual(max);
        expect(random).toBe(randomInt);
      });
    });

    describe('when numbers range is a positive decimal', () => {
      it('should return positive integer from a given range', () => {
        const min = 2.54;
        const max = 30.48;
        const random = DrawService.getRandomIntInclusive(min, max);
        const randomInt = Number.parseInt(`${random}`, 10);

        expect(random).toBeGreaterThanOrEqual(min);
        expect(random).toBeLessThanOrEqual(max);
        expect(random).toBe(randomInt);
      });
    });

    describe('when numbers range is a negative decimal', () => {
      it('should return negative integer from a given range', () => {
        const min = -30.48;
        const max = -2.54;
        const random = DrawService.getRandomIntInclusive(min, max);
        const randomInt = Number.parseInt(`${random}`, 10);

        expect(random).toBeGreaterThanOrEqual(min);
        expect(random).toBeLessThanOrEqual(max);
        expect(random).toBe(randomInt);
      });
    });

    describe('when numbers range contains just one valid integer', () => {
      it('should return the valid integer', () => {
        const min = 0;
        const max = 0;
        const random = DrawService.getRandomIntInclusive(min, max);
        const randomInt = Number.parseInt(`${random}`, 10);

        expect(random).toBeGreaterThanOrEqual(min);
        expect(random).toBeLessThanOrEqual(max);
        expect(random).toBe(randomInt);
      });
    });

    describe('when invalid range was provided', () => {
      describe('when range is from bigger number to smaller number', () => {
        it('should throw RangeError ', () => {
          const min = 5;
          const max = 2;

          expect(() => {
            DrawService.getRandomIntInclusive(min, max);
          }).toThrowError(RangeError);
        });
      });

      describe('when range is from and to the same positive decimal number', () => {
        it('should throw RangeError ', () => {
          const min = 1.1;
          const max = 1.1;

          expect(() => {
            DrawService.getRandomIntInclusive(min, max);
          }).toThrowError(RangeError);
        });
      });

      describe('when range is from and to the same negative decimal number', () => {
        it('should throw RangeError ', () => {
          const min = -1.1;
          const max = -1.1;

          expect(() => {
            DrawService.getRandomIntInclusive(min, max);
          }).toThrowError(RangeError);
        });
      });
    });
  });
});
