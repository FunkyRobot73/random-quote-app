import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuoteService } from '../services/quote.service';
import { QuoteBoxComponent } from "../quote-box/quote-box.component";

@NgModule({
  declarations: [
    AppComponent,
    QuoteBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
