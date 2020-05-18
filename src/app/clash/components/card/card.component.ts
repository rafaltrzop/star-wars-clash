import { Component, Input } from '@angular/core';

import { Card } from '@app/clash/resource-map';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input()
  card: Card<any>;

  @Input()
  playerName: string;

  @Input()
  score: number;

  @Input()
  winner: boolean;
}
