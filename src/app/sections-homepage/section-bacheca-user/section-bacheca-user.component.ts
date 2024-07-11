import { Component, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-section-bacheca-user',
  templateUrl: './section-bacheca-user.component.html',
  styleUrls: ['./section-bacheca-user.component.css'],
})
export class SectionBachecaUserComponent implements OnInit {
  notifications: Notification[] = [];
  // user: User | null = null; TO Do da rimuovere quando sara pronto la login
  user: User = {
    id: '124',
    buildingManager: false,
    name: 'Mario',
    surname: 'Rossi',
    email: 'mario@rossi.com',
    password: 'password',
    cell: '+391234567890',
    birthDate: new Date('1980-01-01T00:00:00Z'),
    profileImg: 'img2.jpg',
    creditCard: '4111111111111111',
    cvv: 123,
    expire: new Date('2025-12-31T00:00:00Z'),
    holder: 'Mario Rossi',
  };

  constructor(
    private notificationService: NotificationService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    /* TO Do da rimuovere quando sara pronto la login
    this.user = this.sessionService.getUserFromSession();*/
    if (this.user) {
      this.notificationService.getNotificationUser(this.user.id).subscribe({
        next: (data: any) => {
          this.notifications = data.lo;
          console.log('BACHECA:', this.notifications);
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
        },
      });
    }
  }
}
