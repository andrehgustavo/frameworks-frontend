import { BrowserModule } from '@angular/platform-browser';
import { NgModule, } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { GameComponent } from './Components/game.component';
import { ScreenComponent } from './Components/screen.component';
import { ResultsComponent } from './Components/results.component';
import { TimerComponent } from "./Components/timer.components";
import { HomeComponent } from "./Components/home.component";
import { InputComponent } from "./Components/input.component";
import {PlayerFormComponent } from "./Components/playerForm.component";

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    GameComponent, 
    ScreenComponent, 
    ResultsComponent, 
    TimerComponent,
    InputComponent, 
    PlayerFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
