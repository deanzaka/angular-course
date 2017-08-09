import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenNumbers = [];
  oddNumbers = [];

  onStarted(count: number) {
    if(count % 2 === 0) {
      this.evenNumbers.push(count);
    } else {
      this.oddNumbers.push(count);
    }
  }
}
