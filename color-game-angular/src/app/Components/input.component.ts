import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NgModel } from '@angular/forms'

@Component({
  selector: 'player-input',
  template: `
    <div class="form-item">
        <input
          #inputElm="ngModel"
          type="text"
          [placeholder]="placeholder"
          [required]="isRequired"
          [(ngModel)]="value"
          (change)="valueChange.emit(inputElm.value)"
          (blur)="valueChange.emit(inputElm.value)"
          [hidden]="type !== 'input'"
        />
        <div class="error">{{ error(inputElm) }}</div>
    </div>
  `,
  styles: [
    `
      .error {
        position: relative;
        color: red;
        
        font-style: italic;
        font-size: smaller;
      }
      .ng-invalid.ng-touched {
        border-color: red;
      }

      input {
        font-family: 'Fjalla One', sans-serif;
        width: 282px;
        padding: 5px 5px;
        margin: 8px 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
      }
    `
  ]
})

export class InputComponent {
  @Input() type: string
  @Input() placeholder: string
  @Input() isRequired: boolean
  @Input() minlength: number
  @Input() value: string
  @Output() valueChange = new EventEmitter<string>()

  error(elm: NgModel) {
    if (elm.invalid && elm.touched) {
      if (elm.errors.required) {
        return 'Este campo é obrigatório.'
      }
      if (elm.errors.minlength) {
        return `Este campo requer pelo menos ${this.minlength} caracteres`
      }
    }
  }
}
