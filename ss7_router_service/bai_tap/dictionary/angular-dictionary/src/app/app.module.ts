import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionayPageComponentComponent } from './dictionary/dictionay-page-component/dictionay-page-component.component';
import { DictionaryDetailComponentComponent } from './dictionary/dictionary-detail-component/dictionary-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionayPageComponentComponent,
    DictionaryDetailComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
