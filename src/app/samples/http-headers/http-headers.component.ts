import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { ApiService } from './api.service';

@Component({
  selector: 'app-http-headers',
  templateUrl: './http-headers.component.html',
  styleUrls: ['./http-headers.component.css'],
})
export class HttpHeadersComponent implements OnInit {
  title = 'http Headers Example';
  people: Person[];
  person = new Person();

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.refreshPeople();
  }

  refreshPeople() {
    this.apiService.getPeopleFromObject().subscribe((data) => {
      this.people = data;
    });
  }

  addPerson() {
    this.apiService.addPerson(this.person).subscribe((data) => {
      this.person = new Person();
      this.refreshPeople();
    });
  }
}
