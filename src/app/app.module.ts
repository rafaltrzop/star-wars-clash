import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from '@app/core';
import { ClashModule } from '@app/clash';

import { AppComponent } from '@app/core/containers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    ClashModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
