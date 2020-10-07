import { Component ,OnInit, Input, Output, EventEmitter  } from '@angular/core'

@Component({
  selector: 'screen',
  template: 
  `<div>   
    <button (click)="teste()"> teste </button>
    <h2 style="{color: {{rightColor}} }"> {{ shuffle(options)[0] }}  </h2>
    <button *ngFor="opt in shuffle(options)": key="opt" (click)="selected(opt)"> {{opt}} </button>>
  </div>
  `
})

export class ScreenComponent {

    @Input() rightColor: String;
    @Input() options: String[];
    @Output() select = new EventEmitter()

   constructor() { }
    ngOnInit() {
          console.log(this.rightColor);
   }

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
      console.log(this.rightColor)
    }
}
