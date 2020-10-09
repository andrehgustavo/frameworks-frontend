import { Component, Input } from '@angular/core'

@Component({
  selector: 'game',
  template:
    `
    <div *ngIf="showResults === true || !hasTime; else noResults">
      <results
        [rightColor] = "rightColor"
        [playerHits] = "playerHits"
      >
      </results>
    </div>
    <ng-template #noResults>
      <screen [options]="options"
              [rightColor]="rightColor"
              (userOption)="next($event)"
              >
      </screen>
      <timer  [resetTime]="resetTime"
              [seconds]="difficulty"
              (restartTime)="stopResetTime($event)"
              (noTime)="timeOver($event)"
              >
      </timer>
    </ng-template>
  `
})
export class GameComponent {
  @Input() difficulty: number;
  options = ['RED', 'YELLOW', 'BLUE', 'GREEN', 'PURPLE', 'WHITE', 'GREY', 'ORANGE', 'PINK']
  showResults = false;
  resetTime = false;
  hasTime = true;
  playerHits = 0;
  sentences = [
    {
      colorName: "BLUE",
      colorNumber: "#0000FF",
    },
    {
      colorName: "GREEN",
      colorNumber: "#7FFF00",
    },
    {
      colorName: "YELLOW",
      colorNumber: "#FFD700",
    },
    {
      colorName: "PURPLE",
      colorNumber: "#4B0082",
    },
    {
      colorName: "WHITE",
      colorNumber: "#F8F8FF",
    },
    {
      colorName: "GREY",
      colorNumber: "#696969",
    },
    {
      colorName: "ORANGE",
      colorNumber: "#FF8C00",
    },
    {
      colorName: "RED",
      colorNumber: "#FF0000",
    },
    {
      colorName: "PINK",
      colorNumber: "#FF1493",
    },
  ];


  rightColor = this.sentences[0];

  randomNumber() {
    return Math.floor(Math.random() * this.sentences.length);
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

  shuffleAll() {
    this.rightColor = this.sentences[this.randomNumber()];
    this.sentences = this.shuffle(this.sentences);
    this.options = this.shuffle(this.options);
  }

  ngOnInit() {
    this.shuffleAll();
  }


  next(userOption) {
    if (this.rightColor.colorName === this.options[userOption]) {
      this.playerHits++;
      this.shuffleAll();
      this.resetTime = true;
    } else {
      this.showResults = true;
    }
  }

  stopResetTime() {
    this.resetTime = false;
  }
  timeOver() {
    this.hasTime = false;
  }
}
