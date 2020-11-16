import { Component } from '@angular/core'

@Component({
  selector: 'home',
  template:
    `
    <div *ngIf="startGame === true ; else noGame">
      <game
        [difficulty]="time">
      </game>
    </div>
    <ng-template #noGame>
      <div>
        <h1>The Stroop Effect Game</h1>
      </div>
      <div class="rowCard">
          <div class="rowCard50">
              <figure class="container-img">
                  <section id="cerebro-image"  style=" ">
                      <img src="../assets/images/cerebro.png" alt="colored brain" />
                  </section>
              </figure>
          </div>
          <div class="rowCard50">
              <div class="card">
                  <div class="card-text">
                      The Stroop effect is related to selective attention, which
                      is the ability to respond to certain environmental stimuli
                      while ignoring others.
                      <br />
                      <br />
                      For example, when a word like
                      <span style="color: red"> blue </span>,
                      <span style="color: blue"> green </span>
                      or
                      <span style="color: green"> red </span>
                      is printed in a color that differs from the color expressed
                      by the meaning semantic, there is a delay in processing the
                      word color, causing slower reaction times and an increase in
                      errors.
                      <br />
                      <br />
                      Therefore, the stroop effect reveals the degree of
                      time that people have to say the name of the color
                      with which the word is painted, instead of the real word.
                  </div>
              </div>
          </div>
      </div>
        <player-form [player]="player"> </player-form> 
      <div class="time">
          <button class="colorful-button" (click)="startNewGame(time=12)">EASY</button>
          <button class="colorful-button" (click)="startNewGame(time=8)">MEDIUM</button>
          <button class="colorful-button" (click)="startNewGame(time=5)">HARD</button>
      </div>
    </ng-template>
  `
})

export class HomeComponent {
  startGame = false;
  time = 0;

  startNewGame(value) {
    this.time = value;
    console.log(this.time)
    this.startGame = true;
  }
  
  player = {
    playername: '',
    nickname: '',
    birthday: '', 
    email: '',
  }


}
