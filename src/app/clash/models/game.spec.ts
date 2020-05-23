import { Card, Game, GameWinner } from '@app/clash/models';

describe('Game', () => {
  describe('#clashCards', () => {
    describe('when card1 power is greater than card2 power', () => {
      it('should return game winner as Player 1', () => {
        const card1Power = 78.2;
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: card1Power,
        });

        const card2Power = 61;
        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: card2Power,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Player1);
        expect(card1Spy.power).toBe(card1Power);
        expect(card2Spy.power).toBe(card2Power);
      });
    });

    describe('when card2 power is greater than card1 power', () => {
      it('should return game winner as Player 2', () => {
        const card1Power = 152;
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: card1Power,
        });

        const card2Power = 7400;
        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: card2Power,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Player2);
        expect(card1Spy.power).toBe(card1Power);
        expect(card2Spy.power).toBe(card2Power);
      });
    });

    describe('when card1 power is the same as card2 power', () => {
      it('should return game winner as a Tie', () => {
        const card1Power = 1;
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: card1Power,
        });

        const card2Power = 1;
        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: card2Power,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Tie);
        expect(card1Spy.power).toBe(card1Power);
        expect(card2Spy.power).toBe(card2Power);
      });
    });

    describe('when card1 power is unknown', () => {
      it('should return game winner as a Tie', () => {
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: NaN,
        });

        const card2Power = 112;
        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: card2Power,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Tie);
        expect(card1Spy.power).toBeNaN();
        expect(card2Spy.power).toBe(card2Power);
      });
    });

    describe('when card2 power is unknown', () => {
      it('should return game winner as a Tie', () => {
        const card1Power = 79;
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: card1Power,
        });

        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: NaN,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Tie);
        expect(card1Spy.power).toBe(card1Power);
        expect(card2Spy.power).toBeNaN();
      });
    });

    describe('when both cards have an unknown power', () => {
      it('should return game winner as a Tie', () => {
        const card1Spy = jasmine.createSpyObj('Card', [], {
          power: NaN,
        });

        const card2Spy = jasmine.createSpyObj('Card', [], {
          power: NaN,
        });

        const gameWinner = Game.clashCards(card1Spy, card2Spy);

        expect(gameWinner).toBe(GameWinner.Tie);
        expect(card1Spy.power).toBeNaN();
        expect(card2Spy.power).toBeNaN();
      });
    });
  });
});
