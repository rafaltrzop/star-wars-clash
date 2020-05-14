import { NgModule } from '@angular/core';

import { ClashRoutingModule } from '@app/clash/clash-routing.module';

import { ClashPageComponent } from '@app/clash/containers';

@NgModule({
  imports: [ClashRoutingModule],
  declarations: [ClashPageComponent],
})
export class ClashModule {}
