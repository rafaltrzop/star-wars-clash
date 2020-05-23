import { Card } from '@app/clash/models';

export enum GameWinner {
  Tie = 'TIE',
  Player1 = 'PLAYER1',
  Player2 = 'PLAYER2',
}

export class Game<T> {
  static clashCards<T>(card1: Card<T>, card2: Card<T>): GameWinner {
    const card1Power = card1.power;
    const card2Power = card2.power;

    if (card1Power > card2Power) {
      return GameWinner.Player1;
    } else if (card2Power > card1Power) {
      return GameWinner.Player2;
    } else {
      return GameWinner.Tie;
    }
  }
}
