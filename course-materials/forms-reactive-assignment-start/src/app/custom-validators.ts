import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';
export class CustomValidators {
  static invalidProjectName(control: FormControl): {[s: string]: boolean} {
    if(control.value === 'test') {
      return {'invalidProjectName': true};
    }
    return null;
  }

  static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const invalidName = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test') {
          resolve({'invalidProjectName': true});
        } else {
          resolve(null);
        }
      }, 2000)
    });
    return invalidName;
  }
}
