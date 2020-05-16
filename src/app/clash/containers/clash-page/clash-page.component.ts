import { Component } from '@angular/core';

@Component({
  selector: 'app-clash-page',
  templateUrl: './clash-page.component.html',
  styleUrls: ['./clash-page.component.scss'],
})
export class ClashPageComponent {
  characters: string[] = ['people', 'starships'];
  character: string = this.characters[0];
}
