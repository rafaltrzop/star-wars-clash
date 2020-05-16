import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material';
import { ClashRoutingModule } from '@app/clash/clash-routing.module';

import { ClashPageComponent } from '@app/clash/containers';
import { CharacterSelectionComponent } from '@app/clash/components';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ClashRoutingModule],
  declarations: [ClashPageComponent, CharacterSelectionComponent],
})
export class ClashModule {}
