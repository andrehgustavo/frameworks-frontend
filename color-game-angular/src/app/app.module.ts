import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent} from '../Components/Game/game.component';
import { ScreenComponent} from '../Components/Screen/screen.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent, GameComponent, ScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule  // Necessário para usar o *ngIf! Importar de @angular/common
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
