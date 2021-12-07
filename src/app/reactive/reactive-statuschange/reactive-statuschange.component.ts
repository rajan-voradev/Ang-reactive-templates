import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-statuschange',
  templateUrl: './reactive-statuschange.component.html',
  styleUrls: ['./reactive-statuschange.component.css'],
})
export class ReactiveStatuschangeComponent implements OnInit {
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
    //console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.reactiveForm.get('firstname')?.statusChanges.subscribe((newStatus) => {
      console.log('firstname status changed');
      console.log(newStatus);
      console.log(this.reactiveForm.get('firstname')?.status);
      console.log(this.reactiveForm.status);

      setTimeout(() => {
        console.log(this.reactiveForm.status);
      });
    });

    this.reactiveForm.get('address')?.statusChanges.subscribe((newStatus) => {
      console.log('address status changed');
      console.log(newStatus);
    });

    this.reactiveForm.statusChanges.subscribe((newStatus) => {
      console.log('form status changed');
      console.log(newStatus);
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
