import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../http-headers/github.service';
import { repos } from '../http-headers/repos';

@Component({
  selector: 'app-global-httperror',
  templateUrl: './global-httperror.component.html',
  styleUrls: ['./global-httperror.component.css'],
})
export class GlobalHttperrorComponent implements OnInit {
  userName: string = 'tektutorialshub';
  repos: repos[];

  loading: boolean = false;
  errorMessage: string;

  constructor(private githubService: GitHubService) {}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getReposCatchError(this.userName).subscribe(
      (response) => {
        //Next callback
        console.log('response received');
        this.repos = response;
      },
      (error) => {
        //Error callback
        console.error('error caught in component');
        this.errorMessage = error;
        this.loading = false;

        throw error;
      }
    );
  }
}
