import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'timer',
  template:
    `
  <div *ngIf="seconds === 0; else hasTime">
      <h1>GameOver</h1>
  </div>
  <ng-template #hasTime>
    <h1>Time Remaining: {{seconds < 10 ? seconds : seconds}}</h1>
  </ng-template>
  `
})
export class TimerComponent {
  @Input() resetTime: boolean;
  @Input() seconds: number;
  @Output() restartTime = new EventEmitter<boolean>();
  @Output() noTime = new EventEmitter<boolean>();

  startTime:number;



  ngOnInit() {
     this.startTime = this.seconds;
    const interval = setInterval(() => {
      if (this.resetTime) {
        this.seconds = this.startTime;
        this.resetTime = false;
        this.restartTime.emit(true);
      }
      if (this.seconds > 0) {
        this.seconds = this.seconds - 1;
      } else {
        this.noTime.emit(true);
        clearInterval(interval);
      }
    }, 1000);
  }

}
