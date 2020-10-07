import { Component, Input } from '@angular/core'

@Component({
  selector: 'screen',
  template: 
  `<div>   
    <h2 style="{color: {{rightColor}} }"> shuffle({{options}})[0]  </h2>
    <button *ngFor="opt in shuffle(options)": key="opt" (click)="selected(opt)"> {{opt}} </button>>
    <button (click)="teste()"> teste </button>
    </div>
  `
})

export class ScreenComponent {
    @Input() rightColor: String;
    @Input() options: String[];

    selected(option){
      console.log("você clicou em ", option);
      return option;
    }

    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    teste(){
      console.log(this.options)
    }
}
