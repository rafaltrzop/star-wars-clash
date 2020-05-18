import { Component, Input } from '@angular/core';

import { DrawService } from '@app/clash/services';
import { Character } from '@app/clash/models';
import { Card, resourceMap } from '@app/clash/resource-map';

// TODO: set change detection strategy
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  @Input()
  resources: unknown[];

  @Input()
  character: Character;

  card1: Card<any>;
  card2: Card<any>;

  constructor(private drawService: DrawService) {}

  clash(): void {
    const [x, y] = this.drawService.getRandomPair<unknown>(this.resources);

    const resourceName = this.character.resourceName;
    this.card1 = resourceMap[resourceName].getCard(x);
    this.card2 = resourceMap[resourceName].getCard(y);

    const winner = this.card1.clash(this.card2);

    // TODO
    console.log('winner: ', winner);
  }
}
