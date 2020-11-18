import { Component } from '@angular/core'
import { PlayerService } from './player.service'
@Component({
  selector: 'home',
  template:
    `
    <div *ngIf="startGame === true ; else noGame">
      <game
        [difficulty]="pService.player.level"
        [player]="pService.player">
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
      <div>
        <player-form 
          [player]="pService.player"
          (send) = "setPlayer($event)"
          > </player-form> 
      </div>
    </ng-template>
  `
})

export class HomeComponent {
  startGame = false;

  constructor(public pService: PlayerService) {}

  run() {
    const player = this.getPlayer();
    this.startGame = true
  }

  setPlayer(value){
    this.pService.setPlayer(value);
    console.log("chamei o setPlayer e to com os dados")
    console.log(value) 
    this.run();
  }

  getPlayer(){
    this.pService.getPlayer();
  }

}
