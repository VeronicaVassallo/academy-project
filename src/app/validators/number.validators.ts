import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nonNegativeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value < 0) {
      return { nonNegative: true };
    }

    return null;
  };
}
