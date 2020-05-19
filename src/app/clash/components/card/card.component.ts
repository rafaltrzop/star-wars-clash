import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Card } from '@app/clash/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input()
  card: Card<unknown>;

  @Input()
  playerName: string;

  @Input()
  playerScore: number;

  @Input()
  winner: boolean;

  @Input()
  tie: boolean;
}
