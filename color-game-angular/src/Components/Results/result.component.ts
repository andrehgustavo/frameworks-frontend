import { Component } from '@angular/core'

@Component({
  selector: 'results',
  templateUrl: './results.component.html'
})
export class ResultsComponent {
    
    colorNumber = 'algo'
    colorName = 'algo'
    playerHits = 'algo'

    refreshPage() {
        window.location.reload(false);
    }
}