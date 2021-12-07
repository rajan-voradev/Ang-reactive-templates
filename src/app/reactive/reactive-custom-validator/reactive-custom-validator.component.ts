import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { customvalidation } from './custom.validator';

@Component({
  selector: 'app-reactive-custom-validator',
  templateUrl: './reactive-custom-validator.component.html',
  styleUrls: ['./reactive-custom-validator.component.css'],
})
export class ReactiveCustomValidatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myForm = new FormGroup({
    numVal: new FormControl('', [customvalidation]),
  });

  get numVal() {
    return this.myForm.get('numVal');
  }

  onSubmit() {
    console.log(this.myForm.value);
  }
}
