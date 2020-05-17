import { Component, Input } from '@angular/core';

import { DrawService } from '@app/clash/services';
import { Character } from '@app/clash/models';

// TODO: set change detection strategy
@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent {
  // TODO: type unknown?
  @Input()
  resources: any[];

  @Input()
  character: Character;

  // TODO: type unknown? set to empty array?
  cards: [any, any];

  constructor(private drawService: DrawService) {}

  startClash(): void {
    this.cards = this.drawService.getRandomPair(this.resources);
  }
}
