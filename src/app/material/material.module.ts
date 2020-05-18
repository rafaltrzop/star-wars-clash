import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRadioModule,
  ],
})
export class MaterialModule {}
