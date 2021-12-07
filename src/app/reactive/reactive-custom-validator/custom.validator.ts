import { AbstractControl, ValidationErrors } from '@angular/forms';

export function customvalidation(
  control: AbstractControl
): ValidationErrors | null {
  const v = +control.value;

  if (isNaN(v)) {
    return { customvalidation: true, requiredValue: 10 };
  }

  if (v <= 10) {
    return { customvalidation: true, requiredValue: 10 };
  }

  return null;
}
