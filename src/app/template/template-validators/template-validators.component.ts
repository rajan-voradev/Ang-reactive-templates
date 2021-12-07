import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-validators',
  templateUrl: './template-validators.component.html',
  styleUrls: ['./template-validators.component.css'],
})
export class TemplateValidatorsComponent implements OnInit {
  title = 'Template driven forms';

  @ViewChild('contactForm') contactForm: NgForm;

  contact: contact;

  ngOnInit() {
    this.contact = {
      firstname: '',
      lastname: '',
      gender: 'male',
      isToc: true,
      email: '',
    };
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class contact {
  firstname: string;
  lastname: string;
  gender: string;
  isToc: boolean;
  email: string;
}
