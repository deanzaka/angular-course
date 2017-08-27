import { CustomValidators } from './custom-validators';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'name' : new FormControl(null, Validators.required, CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
