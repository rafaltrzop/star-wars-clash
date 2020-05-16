import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '@app/material';
import { ClashRoutingModule } from '@app/clash/clash-routing.module';

import { ClashPageComponent } from '@app/clash/containers';
import { CharacterSelectionComponent } from '@app/clash/components';

import * as fromClash from '@app/clash/reducers';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ClashRoutingModule,
    StoreModule.forFeature(fromClash.clashFeatureKey, fromClash.reducers),
  ],
  declarations: [ClashPageComponent, CharacterSelectionComponent],
})
export class ClashModule {}
