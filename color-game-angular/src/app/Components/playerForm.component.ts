import { Component,Input, OnInit, Output, EventEmitter,  } from '@angular/core'
import { PlayerService } from './player.service'
interface PlayerType {
    playername: string,
    nickname: string,
    birthday: string, 
    email: string,
    level: number
} 
@Component({
  selector: 'player-form',
  template:`   
        <form #playerForm="ngForm" (ngSubmit)="playerForm.form.valid && onSubmit()"  >
            <div class="div-bloco"> 
                <player-input
                    type="input"
                    placeholder="Player name"
                    isRequired="true"
                    minlength="3"
                    name="playername"
                    [(value)]="player.playername"
                ></player-input>

                <player-input
                    type="input"
                    placeholder="Nick name"
                    isRequired="true"
                    minlength="3"
                    name="nickname"
                    [(value)]="player.nickname"
                ></player-input>
            </div>     
            <div class="div-bloco"> 
                <player-input
                    type="input"
                    placeholder="Birthday 00/00/00"
                    isRequired="true"
                    minlength="3"
                    name="birthday"
                    [(value)]="player.birthday"
                > </player-input>  
                <player-input 
                    type="input"
                    placeholder="email"
                    minlength="3"
                    name="email"
                    [(value)]="player.email"
                > </player-input>
            </div>
            <div class="time" >
                <button class="colorful-button" (click)="addLevel(12)"> EASY</button>
                <button class="colorful-button" (click)="addLevel(8)"> MEDIUM</button>
                <button class="colorful-button" (click)="addLevel(5)"> HARD</button>
            </div> 
        </form> 
  `,
  
  styleUrls:['./player-form.component.css']

})

export class PlayerFormComponent {
    @Input() player: PlayerType
    @Output() send = new EventEmitter()

    addLevel(value) {
        this.player.level = value;
    }

    ngOnInit() {
        const {playername, nickname, birthday, email, level }  = this.player || {}
        this.player = {
          playername,
          nickname,
          birthday,
          email,
          level
        }
      }

    onSubmit() {
        if( this.player.playername == undefined || 
            this.player.nickname == undefined ||
            this.player.birthday == undefined ||
            this.player.level == 0 )
        {
            alert('NECESSÁRIO PREENCHER O FORMULÁRIO')
        } else {
            const obj = this.player
              this.send.emit(obj)            
        }
    }
}