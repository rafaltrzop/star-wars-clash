import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [MatProgressSpinnerModule, MatRadioModule],
  exports: [MatProgressSpinnerModule, MatRadioModule],
})
export class MaterialModule {}
