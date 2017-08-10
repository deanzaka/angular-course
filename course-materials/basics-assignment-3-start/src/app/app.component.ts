import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testIf = false;
  items = [];

  onButtonPressed() {
    this.testIf = !this.testIf;
    // this.items.push(this.items.length+1);
    this.items.push(new Date);
  }
}
