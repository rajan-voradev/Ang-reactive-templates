import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms';
import { Directive, OnInit, forwardRef } from '@angular/core';

@Directive({
  selector: '[customValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: customValidatorDirective,
      multi: true,
    },
  ],
})
export class customValidatorDirective implements Validator, OnInit {
  ngOnInit() {}

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { customerror: true, requiredValue: 10 };
    }
    if (v <= +10) {
      return { customerror: true, requiredValue: 10 };
    }

    return null;
  }
}
