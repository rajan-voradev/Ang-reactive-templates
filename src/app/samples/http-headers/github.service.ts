import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { repos } from './repos';

@Injectable()
export class GitHubService {
  baseURL: string = 'https://api.github.com/';

  constructor(private http: HttpClient) {}

  //Any Data Type
  getRepos(userName: string): Observable<any> {
    return this.http.get(this.baseURL + 'users/' + userName + '/repos');
  }

  //With catchError
  getReposCatchError(userName: string): Observable<repos[]> {
    return this.http
      .get<repos[]>(this.baseURL + 'usersY/' + userName + '/repos')
      .pipe(
        catchError((err) => {
          console.log('error caught in service');
          console.error(err);
          return throwError(err);
        })
      );
  }
}
