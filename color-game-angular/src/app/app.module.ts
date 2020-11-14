import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { GameComponent } from './Components/game.component';
import { ScreenComponent } from './Components/screen.component';
import { ResultsComponent } from './Components/results.component';
import { TimerComponent } from "./Components/timer.components";
import { HomeComponent } from "./Components/home.component";
import {PlayerFormComponent } from "./Components/playerForm.component";

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    GameComponent, 
    ScreenComponent, 
    ResultsComponent, 
    TimerComponent, 
    PlayerFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
