import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { DrawService } from '@app/clash/services';
import { Card, Character, GameWinner, Game, Player } from '@app/clash/models';
import { ClashPageActions } from '@app/clash/actions';
import * as fromClash from '@app/clash/reducers';
import { resourceMap } from '@app/clash/utils';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameBoardComponent {
  @Input()
  loading: boolean;

  @Input()
  character: string;

  @Input()
  resources: unknown[];

  @Input()
  players: [Player, Player];

  cards: [Card<unknown>, Card<unknown>];

  constructor(private store: Store<fromClash.State>) {}

  get disabled(): boolean {
    return !this.character || this.loading;
  }

  clashCards(): void {
    const [card1, card2] = this.getRandomPairOfCards();
    this.cards = [card1, card2];
    const gameWinner = Game.clashCards<unknown>(card1, card2);
    this.dispatchActions(gameWinner);
  }

  private getRandomPairOfCards(): [Card<unknown>, Card<unknown>] {
    const [resource1, resource2] = DrawService.getRandomPair<unknown>(
      this.resources
    );

    const card1 = resourceMap[this.character].getCard(resource1);
    const card2 = resourceMap[this.character].getCard(resource2);

    return [card1, card2];
  }

  private dispatchActions(gameWinner: GameWinner): void {
    switch (gameWinner) {
      case GameWinner.Player1:
        this.store.dispatch(ClashPageActions.roundWonByPlayer1());
        break;
      case GameWinner.Player2:
        this.store.dispatch(ClashPageActions.roundWonByPlayer2());
        break;
      case GameWinner.Tie:
        this.store.dispatch(ClashPageActions.roundEndedWithTie());
        break;
    }
  }
}
