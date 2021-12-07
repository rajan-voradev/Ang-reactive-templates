import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-valuechange',
  templateUrl: './template-valuechange.component.html',
  styleUrls: ['./template-valuechange.component.css'],
})
export class TemplateValuechangeComponent implements OnInit {
  title = 'Template driven forms';
  @ViewChild('templateForm')
  templateForm!: NgForm;

  contact: contact = new contact();

  onSubmit() {
    console.log(this.templateForm.value);
  }

  ngOnInit() {
    setTimeout(() => {
      this.templateForm.control
        .get('firstname')
        ?.statusChanges.subscribe((newStatus) => {
          console.log('firstname status changed');
          console.log(newStatus);
          console.log(this.templateForm.control.get('firstname')?.status);
          console.log(this.templateForm.control.status);

          setTimeout(() => {
            console.log(this.templateForm.control.status);
          });
        });

      this.templateForm.control
        .get('address')
        ?.statusChanges.subscribe((newStatus) => {
          console.log('address status changed');
          console.log(newStatus);
        });

      this.templateForm.control.statusChanges.subscribe((newStatus) => {
        console.log('form status changed');
        console.log(newStatus);
      });
    });
  }

  setValue() {
    let contact = {
      firstname: 'Rahul',
      lastname: 'Dravid',
      address: {
        city: 'Bangalore',
        street: 'Brigade Road',
        pincode: '600070',
      },
    };
    this.templateForm.setValue(contact);
  }

  setAddress() {
    let address = {
      city: 'Bangalore',
      street: 'Brigade Road',
      pincode: '600070',
    };

    this.templateForm.control.get('address')?.setValue(address);
  }

  setFirstname() {
    this.templateForm.control.get('firstname')?.setValue('Saurav');
  }

  withoutOnlySelf() {
    this.templateForm.control.get('firstname')?.setValue('');
  }
  withOnlySelf() {
    this.templateForm.control
      .get('firstname')
      ?.setValue('', { onlySelf: true });
  }

  withoutEmitEvent() {
    this.templateForm.control.get('firstname')?.setValue('Sachin');
  }
  withEmitEvent() {
    this.templateForm.control
      .get('firstname')
      ?.setValue('', { emitEvent: false });
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
