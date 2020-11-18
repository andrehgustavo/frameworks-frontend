import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class PlayerService  {
  player = {}
  

  createPlayer() {
    return this.player = {
        playername: '',
        nickname: '',
        birthday: '', 
        email: '',
        level: 0,
      }
  }

  setPlayer(value) { this.player = value }
  
  getPlayer() { return this.player }
    

}