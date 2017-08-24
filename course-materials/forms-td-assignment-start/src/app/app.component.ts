import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscriptions = ['Basic', 'Advance', 'Pro'];
  selectedSubscription = 'Basic';
  @ViewChild('f') signUpForm;

  onSubmit() {
    console.log(this.signUpForm.value);
  }

}
