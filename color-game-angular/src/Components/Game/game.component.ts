import { Component } from '@angular/core'


@Component({
  selector: 'game',
  template: 
  `<div> 
    <screen>   
        [rightColor] = "sentences[randomNumber(currentColor)].colorNumber"
        [options] = "options"
        (select) = "onSelect($event)">
    </screen>
    <br/>
    <Results
      *ngIf="showResults" :[playerHits] ="playerHits" :[rightColor]="sentences[currentColor]">
    </Results>
  </div>`
})
export class GameComponent{
  
  sentences: {} = [
    {
      colorName: "BLUE",
      colorNumber: "#0000FF"
    },
    {
      colorName: "GREEN",
      colorNumber: "#7FFF00"
    },
    {
      colorName: "YELLOW",
      colorNumber: "#FFD700"          
    },
    {
      colorName: "PURPLE",
      colorNumber: "#4B0082"
    },
    {
      colorName: "WHITE",
      colorNumber: "#F8F8FF"
    },
    {
      colorName: "GREY",
      colorNumber: "#696969"
    },
    {
      colorName: "ORANGE",
      colorNumber: "#FF8C00"
    },
    {
      colorName: "RED",
      colorNumber: "#FF0000"
    },
    {
      colorName: "PINK",
      colorNumber: "#FF1493"
    }
  ] 

  options:String[] = [
    "RED",
    "YELLOW",
    "BLUE",
    "GREEN",
    "PURPLE",
    "WHITE",
    "GREY",
    "ORANGE",
    "PINK",
  ] 
  
  answers:[]

  componentKey: 0
  currentColor: 0
  showResults: boolean = false
  playerHits: 0
  time: boolean = true

  /** Method to force redenrization  */
  forceRerender() {
    this.componentKey += 1;
    console.log("componentKey: " + this.componentKey);

  }

  /** Method called when a color button is pressed, if the choice is right
   * the player hits are incremented and the method forceRerender() are called.
   * @param {*} option - the player's color choice
   */
  onSelect(option){
    if (this.sentences[this.currentColor].colorName == option) {
      this.time = true;
      this.playerHits++;
      this.forceRerender();
    } else{
      this.time = false;
      this.showResults = true;
    }
  }
  /** Method called when the time's ended.
   * @param {*} option - a boolean if time is ended.
   */
  hasTime(option){
    this.showResults = option;
    this.time = false;
  }
  /** Method called to choose a random number based on the number of colors in the game.
   * @param {*} number - the current position of the color in the array (sentences).
   */
  randomNumber(number) {
    number = Math.floor(Math.random() * 9 );
    this.currentColor = number;
    return number;
  }

}