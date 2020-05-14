import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClashPageComponent } from '@app/clash/containers';

const routes: Routes = [
  {
    path: '',
    component: ClashPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
