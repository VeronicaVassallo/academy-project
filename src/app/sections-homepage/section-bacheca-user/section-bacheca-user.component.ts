import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';
import { ERole } from '../../models/roles';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-section-bacheca-user',
  templateUrl: './section-bacheca-user.component.html',
  styleUrls: ['./section-bacheca-user.component.css'],
})
export class SectionBachecaUserComponent implements OnInit {
  notifications: Notification[] = [];
  user: User | null = null;
  token: string | null = '';
  tokenConverted: any;
  ERole = ERole;
  loader: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenConverted = jwtDecode(this.token);
      this.loader = true;
      this.notificationService
        .getNotificationUser(this.tokenConverted.id)
        .subscribe({
          next: (data: any) => {
            this.notifications = data.lo;
            console.log('BACHECA:', this.notifications);
            this.loader = false;
          },
          error: (err) => {
            console.error('Errore durante la ricezione dei dati:', err);
          },
        });
    }
  }
}
