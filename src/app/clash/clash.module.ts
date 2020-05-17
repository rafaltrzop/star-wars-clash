import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/material';
import { ClashRoutingModule } from '@app/clash/clash-routing.module';

import { ClashPageComponent, GameBoardComponent } from '@app/clash/containers';
import { CharacterSelectionComponent } from '@app/clash/components';

import { ClashPageEffects } from '@app/clash/effects';
import * as fromClash from '@app/clash/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ClashRoutingModule,
    StoreModule.forFeature(fromClash.clashFeatureKey, fromClash.reducers),
    EffectsModule.forFeature([ClashPageEffects]),
  ],
  declarations: [
    ClashPageComponent,
    GameBoardComponent,
    CharacterSelectionComponent,
  ],
})
export class ClashModule {}
