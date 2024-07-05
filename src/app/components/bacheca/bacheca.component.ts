import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-bacheca',
  templateUrl: './bacheca.component.html',
  styleUrls: ['./bacheca.component.css'],
})
export class BachecaComponent implements OnInit {
  notifications: Notification[] = [];
  user: User | null = null;

  constructor(
    private notificationService: NotificationService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.user = this.sessionService.getUserFromSession();
    if (this.user) {
      this.notificationService.getNotificationUser(this.user.id).subscribe({
        next: (data: Notification[]) => {
          this.notifications = data;
          console.log('BACHECA:', this.notifications);
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
        },
      });
    }
  }
}
