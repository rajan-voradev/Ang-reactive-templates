import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from '@narik/custom-validators';
@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css'],
})
export class ReactiveformsComponent implements OnInit {
  public form: FormGroup;
  public num = 5;
  public arrayLengthTest = ['ok'];
  public dateTest = { year: 2021, month: 12, day: 10 };
  public objProperty = { id: 1 };

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl(
      '',
      CustomValidators.equalTo(password)
    );
    const rangeCont = new FormControl('', CustomValidators.rangeLength([5, 9]));
    const requried = new FormControl('', Validators.required);
    const minlength = new FormControl('', CustomValidators.min(10));
    const maxlength = new FormControl('', CustomValidators.max(20));
    const greaterthan = new FormControl('', CustomValidators.gt(10));
    const greaterthanorequal = new FormControl('', CustomValidators.gte(10));
    const base64 = new FormControl('', CustomValidators.base64);
    const date = new FormControl('', CustomValidators.date);
    const maxDate = new FormControl('', CustomValidators.maxDate('2021-12-31'));
    const minDate = new FormControl('', CustomValidators.minDate('2021-12-01'));
    const digits = new FormControl('', CustomValidators.digits);
    const email = new FormControl('', CustomValidators.email);

    this.form = new FormGroup({
      password,
      certainPassword,
      rangeCont,
      requried,
      minlength,
      maxlength,
      greaterthan,
      greaterthanorequal,
      base64,
      date,
      maxDate,
      minDate,
      digits,
      email,
    });
  }

  onSubmit(form: any) {
    console.log(form);
  }
}
