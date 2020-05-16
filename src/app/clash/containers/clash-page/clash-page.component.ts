import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { Character } from '@app/clash/models';
import { ClashPageActions } from '@app/clash/actions';
import * as fromClash from '@app/clash/reducers';

@Component({
  selector: 'app-clash-page',
  templateUrl: './clash-page.component.html',
  styleUrls: ['./clash-page.component.scss'],
})
export class ClashPageComponent {
  character$ = this.store.pipe(select(fromClash.getCharacter));
  characters$ = this.store.pipe(select(fromClash.getCharacters));

  constructor(private store: Store<fromClash.State>) {}

  changeCharacter(character: Character): void {
    this.store.dispatch(ClashPageActions.changeCharacter({ character }));
  }
}
