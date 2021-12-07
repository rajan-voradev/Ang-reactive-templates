import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-set-npatch-value',
  templateUrl: './reactive-set-npatch-value.component.html',
  styleUrls: ['./reactive-set-npatch-value.component.css'],
})
export class ReactiveSetNPatchValueComponent implements OnInit {
  title = 'Reactive Forms';
  constructor() {}

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  reactiveForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
    }),
  });

  // reactiveForm = new FormGroup({
  //   firstname: new FormControl('Sachin'),
  //   lastname: new FormControl('Tendulkar'),
  //   email: new FormControl('sachin@gmail.com'),
  //   gender: new FormControl('male'),
  //   isMarried: new FormControl(true),
  //   country: new FormControl('2'),
  //   address:new FormGroup({
  //     city: new FormControl("Mumbai"),
  //     street: new FormControl("Perry Cross Rd"),
  //     pincode:new FormControl("400050")
  //   })
  // })

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  ngOnInit() {
    this.setDefault();
  }

  // ngOnInit() {
  //   this.setDefault();

  //   this.reactiveForm.get("firstname").statusChanges.subscribe(x => {
  //     console.log('firstname status changes')
  //   })

  //   this.reactiveForm.get("firstname").valueChanges.subscribe(x => {
  //     console.log('firstname value changed')
  //   })

  //   this.reactiveForm.statusChanges.subscribe(x => {
  //     console.log('form status changes')
  //   })

  //   this.reactiveForm.valueChanges.subscribe(x => {
  //     console.log('form value changed')
  //   })
  //  }

  setDefault() {
    let contact = {
      firstname: 'Elon',
      lastname: 'Musk',
      email: 'elonmusk@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Austin',
        street: 'Perry Cross Rd',
        pincode: '03801',
      },
    };

    this.reactiveForm.setValue(contact);
  }

  setValue() {
    let contact = {
      firstname: 'Marc',
      lastname: 'Zucker',
      email: 'marczuker@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '1',
      address: {
        city: 'Honolulu',
        street: 'Brigade Road',
        pincode: '03001',
      },
    };

    this.reactiveForm.setValue(contact);
  }

  setAddress() {
    let address = {
      city: 'Portsmouth',
      street: 'Brigade Road',
      pincode: '10710',
    };
    this.reactiveForm.get('address')?.setValue(address);
  }

  setCountry() {
    this.reactiveForm.get('country')?.setValue('1');
  }

  patchAddress() {
    let address = {
      city: 'Portsmouth',
      street: 'Brigade Road',
      //pincode: "600070",
      //firstname:'saurv'
    };

    this.reactiveForm.get('address')?.patchValue(address);
  }

  patchName() {
    let contact = {
      firstname: 'Bill',
      lastname: 'Gates',
    };

    this.reactiveForm.patchValue(contact);
  }

  reset() {
    this.reactiveForm.reset();
  }
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
