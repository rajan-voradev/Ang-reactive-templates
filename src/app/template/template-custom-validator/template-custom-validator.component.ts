import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-custom-validator',
  templateUrl: './template-custom-validator.component.html',
  styleUrls: ['./template-custom-validator.component.css'],
})
export class TemplateCustomValidatorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log('Submit');
  }
}
