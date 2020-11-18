import { Component,Input, OnInit, Output, EventEmitter,  } from '@angular/core'

interface PlayerType {
    playername: string,
    nickname: string,
    birthday: string, 
    email: string,
} 
@Component({
  selector: 'player-form',
  template:`   
        <form #playerForm="ngForm" (ngSubmit)="playerForm.form.valid && onSubmit()"  >
            <div> 
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
            <div> 
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
            <div> 
                <input type="submit" value="jogar" />
            </div>
        </form> 
  `,
  
  styleUrls:['./player-form.component.css']

})

export class PlayerFormComponent {
    @Input() player: PlayerType
    @Output() send = new EventEmitter()
    
    ngOnInit() {
        const {playername, nickname, birthday, email }  = this.player || {}
        
        this.player = {
          playername,
          nickname,
          birthday,
          email,
        }
      }

    onSubmit() {
        const obj = [
          this.player.playername,
          this.player.nickname,
          this.player.birthday,
          this.player.email
        ].filter((o) => o && o.trim() !== '')
        console.log(obj)
        this.send.emit({
           player: obj
        })
    }
}