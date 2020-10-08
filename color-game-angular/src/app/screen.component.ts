import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'screen',
  template:
    `
    <h1 style="color: {{rightColor.colorNumber}}">{{options[0]}}</h1>
    <button *ngFor="let option of options; index as idx" (click)="userOption.emit(idx)">
      {{ option }}
    </button>
  `
})
export class ScreenComponent {
  @Input() options: string[];
  @Input() rightColor: string[];
  @Output() userOption = new EventEmitter<number>();

}
