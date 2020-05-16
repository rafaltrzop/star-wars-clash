import { Component } from '@angular/core';

import { Character } from '@app/clash/models';

@Component({
  selector: 'app-clash-page',
  templateUrl: './clash-page.component.html',
  styleUrls: ['./clash-page.component.scss'],
})
export class ClashPageComponent {
  characters: Character[] = [
    {
      name: 'People',
      clashAttribute: 'mass',
      apiResource: 'people',
    },
    {
      name: 'Starships',
      clashAttribute: 'crew',
      apiResource: 'starships',
    },
  ];
  character: Character = this.characters[0];
}
