import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-globalerror',
  templateUrl: './globalerror.component.html',
  styleUrls: ['./globalerror.component.css'],
})
export class GlobalerrorComponent implements OnInit {
  title: string = 'Global Error Handler in Angular';
  constructor() {}

  ngOnInit(): void {}

  throwError1() {
    var a = 0;
  }

  throwError2() {
    try {
      throw Error;
    } catch (error) {
      throw error;
    }
  }
}
