import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Character, Player } from '@app/clash/models';
import { ClashPageActions } from '@app/clash/actions';
import * as fromClash from '@app/clash/reducers';

@Component({
  selector: 'app-clash-page',
  templateUrl: './clash-page.component.html',
  styleUrls: ['./clash-page.component.scss'],
})
export class ClashPageComponent {
  loading$: Observable<boolean>;
  character$: Observable<Character>;
  characters$: Observable<Character[]>;
  resources$: Observable<unknown[]>;
  players$: Observable<[Player, Player]>;

  constructor(private store: Store<fromClash.State>) {
    this.loading$ = this.store.pipe(select(fromClash.getClashPageLoading));
    this.character$ = this.store.pipe(select(fromClash.getClashPageCharacter));
    this.characters$ = this.store.pipe(
      select(fromClash.getClashPageCharacters)
    );
    this.resources$ = this.store.pipe(select(fromClash.getClashPageResources));
    this.players$ = this.store.pipe(select(fromClash.getClashPagePlayers));
  }

  changeCharacter(character: Character): void {
    this.store.dispatch(ClashPageActions.changeCharacter({ character }));
  }
}
