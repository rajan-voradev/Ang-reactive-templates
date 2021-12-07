import { Component, OnInit, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  name = 'Angular : ' + VERSION.major + ':' + VERSION.minor;

  obs = new Observable((observer) => {
    console.log('Observable starts');
    setTimeout(() => {
      observer.next('1');
    }, 1000);
    setTimeout(() => {
      observer.next('2');
    }, 2000);
    setTimeout(() => {
      observer.next('3');
    }, 3000);
    //setTimeout(() => { observer.complete() }, 3500);
    setTimeout(() => {
      observer.error('error emitted');
    }, 3500);
    setTimeout(() => {
      observer.next('4');
    }, 4000);
    setTimeout(() => {
      observer.next('5');
    }, 5000);
  });

  //Observable Operators (filter and map)
  /*
  obs.pipe(
    obs = new Observable((observer) => {
      observer.next(1)
      observer.next(2)
      observer.next(3)
      observer.next(4)
      observer.next(5)
      observer.complete()
    }).pipe(
      filter(data => data > 2),   //filter Operator
      map((val) => {return val as number * 2}), //map operator
    )
  */

  constructor() {}

  ngOnInit(): void {
    this.obs.subscribe(
      (val) => {
        console.log(val);
      }, //next callback
      (error) => {
        console.log('error');
      }, //error callback
      () => {
        console.log('Completed');
      } //complete callback
    );
  }
}
