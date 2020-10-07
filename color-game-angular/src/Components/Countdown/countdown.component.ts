import { Component } from '@angular/core'

@Component({
  selector: 'countdown',
  template: 
  `
    <div>         
        <h2 *ngIf="timerCount == 0" > GameOver {{timeIsOver()}} </h2>
        <h2 *ngElseIf="!addTime"> GameOver {{timeIsOver()}} </h2>
        <h2 *ngElse> Countdown: {{ timerCount }} </h2>
    </div>
  `
})

export class CountdowComponent {

    name: "Countdown"
    props: ["addTime"]
    
    timerCount : 5 

    timeIsOver() {
        console.log("O tempo acabou");
        return true;
    }

    countDownTimer() {
        if(this.timerCount > 0) {
            setTimeout(() => {
                this.timerCount -= 1
                this.countDownTimer()
            }, 1000)
        }
    }
    
    created() {
        this.countDownTimer()
    }
}