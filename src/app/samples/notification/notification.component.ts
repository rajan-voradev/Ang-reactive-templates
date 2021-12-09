import { Component, OnInit } from '@angular/core';
import { NotificationInternalService } from './notification-internal.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  template: `
    <h1>This is a Notification sample</h1>
    <button (click)="onClick()">Show error</button>
    <br />
    <h2 *ngIf="error$ | async as error">{{ error }}</h2>
  `,
  styles: [
    `
      h1 {
        font-family: Verdana;
      }
    `,
  ],
})
export class NotificationComponent implements OnInit {
  error$ = this.service.error$;

  constructor(
    private readonly service: NotificationInternalService,
    private readonly notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  onClick(): void {
    this.notificationService.showError(
      `This errors has been posted on ${Date.now()}`
    );
  }
}
