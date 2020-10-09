import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './Components/game.component';
import { ScreenComponent } from './Components/screen.component';
import { ResultsComponent } from './Components/results.component';
import { TimerComponent } from "./Components/timer.components";
import { HomeComponent } from "./Components/home.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, GameComponent, ScreenComponent, ResultsComponent, TimerComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
