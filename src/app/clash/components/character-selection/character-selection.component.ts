import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import { Character } from '@app/clash/models';

@Component({
  selector: 'app-character-selection',
  templateUrl: './character-selection.component.html',
  styleUrls: ['./character-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSelectionComponent {
  @Input()
  characters: Character[];

  @Input()
  character: string;

  @Output()
  characterChange: EventEmitter<string> = new EventEmitter<string>();
}
