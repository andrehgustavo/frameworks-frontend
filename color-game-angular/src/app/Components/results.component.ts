import { Component, Input } from '@angular/core'

@Component({
  selector: 'results',
  template:
    `
  <div>
    <h2> GameOver {{player.playername}} </h2>
    <h3>
        The right answer is:
        <span
            style="color: {{rightColor.colorNumber}}">{{rightColor.colorName}}</span>
    </h3>
    <h2>Hits: {{playerHits}}</h2>
    </div>
    <div>
      <button class="colorful-button" (click)="refreshPage()">Restart Game</button>
    </div>
  `
})
export class ResultsComponent {
  @Input() rightColor: {
    colorNumber: string;
    colorName: string;
  };
  @Input() playerHits: number
  @Input() player: {}

  refreshPage() {
    location.reload();
  }

}
