import { Component, Input } from '@angular/core';

import { DrawService } from '@app/clash/services';
import { Character } from '@app/clash/models';
import { Card, ClashWinner, resourceMap } from '@app/clash/resource-map';

// TODO: set change detection strategy
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  @Input()
  loading: boolean;

  @Input()
  resources: unknown[];

  @Input()
  character: Character;

  card1: Card<unknown>;
  card2: Card<unknown>;

  get disabled(): boolean {
    return !this.character || this.loading;
  }

  // TODO: extract some functions
  clash(): void {
    const resourceName = this.character.resourceName;
    const [x, y] = DrawService.getRandomPair<unknown>(this.resources);

    this.card1 = resourceMap[resourceName].getCard(x);
    this.card2 = resourceMap[resourceName].getCard(y);

    const clashWinner = this.card1.clash(this.card2);
    // TODO
    // - dispatch set last winner

    // TODO
    switch (clashWinner) {
      case ClashWinner.Player1:
        // TODO
        // - dispatch increase points for player 1
        // - set flag
        break;
      case ClashWinner.Player2:
        // TODO
        // - dispatch increase points for player 2
        // - set flag
        break;
      case ClashWinner.Tie:
        // TODO
        // - set flag
        break;
    }

    // TODO
    console.log('winner: ', clashWinner);
  }
}
