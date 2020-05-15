import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material';
import { ClashRoutingModule } from '@app/clash/clash-routing.module';

import { ClashPageComponent } from '@app/clash/containers';
import { CharacterSelectionComponent } from '@app/clash/components';

@NgModule({
  imports: [MaterialModule, ClashRoutingModule],
  declarations: [ClashPageComponent, CharacterSelectionComponent],
})
export class ClashModule {}
