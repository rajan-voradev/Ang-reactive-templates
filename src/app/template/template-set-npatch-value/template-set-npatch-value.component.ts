import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-set-npatch-value',
  templateUrl: './template-set-npatch-value.component.html',
  styleUrls: ['./template-set-npatch-value.component.css'],
})
export class TemplateSetNPatchValueComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('templateForm')
  templateForm!: NgForm;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'England'),
  ];

  contact: contact = new contact();

  onSubmit() {
    console.log(this.templateForm.value);
  }

  ngOnInit() {
    setTimeout(() => {
      this.setDefault();
    });
  }

  setDefault() {
    let contact = {
      firstname: 'Elon',
      lastname: 'Musk',
      email: 'emsuk@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '2',
      address: {
        city: 'Austin',
        street: 'Perry Cross Rd',
        pincode: '10001',
      },
    };

    this.templateForm.control.setValue(contact);
  }

  setValue() {
    let contact = {
      firstname: 'Praveen',
      lastname: 'aggarwal',
      email: 'paggrawal@gmail.com',
      gender: 'male',
      isMarried: true,
      country: '1',
      address: {
        city: 'San Jose',
        street: 'Brigade Road',
        pincode: '10002',
      },
    };

    this.templateForm.setValue(contact);
  }

  setAddress() {
    let address = {
      city: 'San Fran',
      street: 'Brigade Road',
      pincode: '10003',
    };

    this.templateForm.control.get('address')?.setValue(address);
  }

  setCountry() {
    let address = {
      city: 'Boston',
      street: 'Brigade Road',
      pincode: '10004',
    };

    this.templateForm.control.get('country')?.setValue('1');
  }

  patchAddress() {
    let address = {
      city: 'Seattle',
      street: 'Brigade Road',
      //pincode: "600070",
      //firstname:'saurv'
    };

    this.templateForm.control.get('address')?.patchValue(address);
  }

  patchName() {
    let contact = {
      firstname: 'Elon',
      lastname: 'Musk',
    };

    this.templateForm.control.patchValue(contact);
  }

  reset() {
    this.templateForm.reset();
  }
}

export class contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = '';
  email: string = '';
  isMarried: boolean = false;
  country: string = '';
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}

export class country {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
