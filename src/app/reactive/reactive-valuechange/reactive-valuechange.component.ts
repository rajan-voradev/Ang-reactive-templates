import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-valuechange',
  templateUrl: './reactive-valuechange.component.html',
  styleUrls: ['./reactive-valuechange.component.css'],
})
export class ReactiveValuechangeComponent implements OnInit {
  title = 'Reactive Forms';

  reactiveForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.reactiveForm
      .get('firstname')
      ?.valueChanges.subscribe((selectedValue) => {
        console.log('firstname value changed');
        console.log(selectedValue);
        console.log(this.reactiveForm.get('firstname')?.value);
        console.log(this.reactiveForm.value);

        setTimeout(() => {
          console.log(this.reactiveForm.value);
        });
      });

    this.reactiveForm
      .get('address')
      ?.valueChanges.subscribe((selectedValue) => {
        console.log('address changed');
        console.log(selectedValue);
      });

    this.reactiveForm.valueChanges.subscribe((selectedValue) => {
      console.log('form value changed');
      console.log(selectedValue);
    });
  }

  setValue() {
    let contact = {
      firstname: 'Elon',
      lastname: 'Musk',
      address: {
        city: 'Austin',
        street: 'Brigade Road',
        pincode: '00001',
      },
    };

    this.reactiveForm.setValue(contact);
  }

  setAddress() {
    this.reactiveForm.get('address')?.setValue({
      city: 'Portsmouth',
      street: 'Brigade Road',
      pincode: '00002',
    });
  }

  setFirstname() {
    this.reactiveForm.get('firstname')?.setValue('Bill');
  }

  withoutOnlySelf() {
    this.reactiveForm.get('firstname')?.setValue('');
  }

  withOnlySelf() {
    this.reactiveForm.get('firstname')?.setValue('', { onlySelf: true });
  }

  withEmitEvent() {
    this.reactiveForm.get('firstname')?.setValue('Elon');
  }

  withoutEmitEvent() {
    this.reactiveForm.get('firstname')?.setValue('', { emitEvent: false });
  }

  reset() {
    this.reactiveForm.reset();
  }
}
