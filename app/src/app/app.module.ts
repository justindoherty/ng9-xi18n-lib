import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { I18nModule } from 'lib-i18n';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    I18nModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
