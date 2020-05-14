import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClashPageComponent } from '@app/clash/containers';

const routes: Routes = [
  {
    path: '',
    component: ClashPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClashRoutingModule {}
