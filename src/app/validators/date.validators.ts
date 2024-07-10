import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateNotInFutureValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (!control.value) {
      return null;
    }

    if (
      selectedDate.getFullYear() > currentDate.getFullYear() ||
      (selectedDate.getFullYear() === currentDate.getFullYear() &&
        selectedDate.getMonth() > currentDate.getMonth())
    ) {
      return { dateNotInFuture: true };
    }

    return null;
  };
}
