import { FormControl } from '@angular/forms';

export const createValidator = (minLength: number, timeout: number, control: FormControl) => {
        return new Promise( resolve => {
          setTimeout(() => {
            if ( control.value.length > minLength) {
              resolve(null);
            } else {
              resolve(`Must be at least ${minLength} characters`);
            }
          }, timeout);
        });
  }

export class AsyncValidators {
  static ValidateFirstName(control: FormControl): {[key: string]: any} {
    return createValidator(5, 2000, control);
  };

  static ValidateLastName(control: FormControl): {[key: string]: any} {
    return createValidator(5, 1000, control);
  };
};
