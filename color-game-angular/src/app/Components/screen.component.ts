import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'screen',
  template:
    `
    <h1> Let's go {{player.playername}}!</h1>
    <h1 style="color: {{rightColor.colorNumber}}">{{options[0]}}</h1>
    <button class="colorful-button" *ngFor="let option of options; index as idx" (click)="userOption.emit(idx)">
      {{ option }}
    </button>
  `
})
export class ScreenComponent {
  @Input() options: object[];
  @Input() rightColor: {
    colorNumber: string;
    colorName: string;
  };
  @Input() player: {}
  @Output() userOption = new EventEmitter<number>();

}
