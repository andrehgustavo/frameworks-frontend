import { Component,Input } from '@angular/core'

interface PlayerType {
    playername: string,
    nickname: string,
    birthday: string, 
    email: string,
}

@Component({
  selector: 'player-form',
  template:`   
        <form #player="ngForm" (ngSubmit)="player.form.valid && player.form.onSubmit()">
            <div> 
                <input 
                    type="text"    
                    placeholder="Player name"      
                    #playername="ngModel"
                    name="playername"
                    [(ngModel)]="player.playername"
                    required
                    minlength="3"
                />
                <div class="error" *ngIf="playername.invalid && playername.touched">
                    <div *ngIf="playername.errors.required">
                        O nome do jogador é obrigatório.
                    </div>
                    <div *ngIf="playername.errors.minlength">
                        O nome do jogador requer pelo menos 3 caracteres.
                    </div>
                </div>

                <input 
                    type="text"
                    placeholder="nick name"
                    #nickname="ngModel"
                    name="nickname"
                    [(ngModel)]="player.nickname" 
                    required
                    minlength="3"
                
                />
                <div class="error" *ngIf="nickname.invalid && nickname.touched">
                    <div *ngIf="nickname.errors.required">
                        O nickname é obrigatório.
                    </div>
                    <div *ngIf="nickname.errors.minlength">
                        O nickname requer pelo menos 3 caracteres.
                    </div>
                </div>

            </div>     
            <div> 
                <input 
                    type="text"
                    placeholder="birthday"
                    #birthday="ngModel"
                    [(ngModel)]="player.birthday" 
                    name="birthday"
                    required
                    minlength="8"
                />
                <div class="error" *ngIf="birthday.invalid && birthday.touched">
                    <div *ngIf="birthday.errors.required">
                        O data de nascimento é obrigatório.
                    </div>
                    <div *ngIf="birthday.errors.minlength">
                        O 00/00/00 requer pelo menos 8 caracteres.
                    </div>
                </div>
            
                <input 
                    type="email"
                    placeholder="email"
                    #email="ngModel"
                    [(ngModel)]="player.email" 
                    name="email"
                    required 
                />
                <div class="error" *ngIf="birthday.invalid && birthday.touched">
                    <div *ngIf="birthday.errors.required">
                        O email é obrigatório.
                    </div>
                </div>
            </div>
            
           <div> 
                <button (click)="send(playername.value,nickname.value,  birthday.value, email.value)"> Jogar! </button>
           </div>
        </form> 
  `,
  
  styleUrls:['./player-form.component.css']

})

export class PlayerFormComponent {
    @Input() player: PlayerType
}