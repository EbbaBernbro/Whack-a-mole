import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeadsUpDisplayComponent } from './heads-up-display/heads-up-display.component';
import { PlayfieldComponent } from './playfield/playfield.component';

@NgModule({
  declarations: [AppComponent, HeadsUpDisplayComponent, PlayfieldComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
