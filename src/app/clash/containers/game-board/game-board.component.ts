import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { DrawService } from '@app/clash/services';
import { Card, Character, ClashWinner, Player } from '@app/clash/models';
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
  character: Character;

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
    const clashWinner = card1.clash(card2);
    this.dispatchActions(clashWinner);
  }

  private getRandomPairOfCards(): [Card<unknown>, Card<unknown>] {
    const [resource1, resource2] = DrawService.getRandomPair<unknown>(
      this.resources
    );

    const resourceName = this.character.resourceName;
    const card1 = resourceMap[resourceName].getCard(resource1);
    const card2 = resourceMap[resourceName].getCard(resource2);

    return [card1, card2];
  }

  private dispatchActions(clashWinner: ClashWinner): void {
    switch (clashWinner) {
      case ClashWinner.Player1:
        this.store.dispatch(ClashPageActions.roundWonByPlayer1());
        break;
      case ClashWinner.Player2:
        this.store.dispatch(ClashPageActions.roundWonByPlayer2());
        break;
      case ClashWinner.Tie:
        this.store.dispatch(ClashPageActions.roundEndedWithTie());
        break;
    }
  }
}
