import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { SessionService } from '../../services/session.service';
import { ERole } from '../../models/roles';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-table-notification',
  templateUrl: './table-notification.component.html',
  styleUrl: './table-notification.component.css',
})
export class TableNotificationComponent implements OnInit {
  token: string | null = '';
  tokenConverted: any;
  @Input() notficationsList: Notification[] = [];
  ERole = ERole;

  constructor(
    private notificationService: NotificationService,
    private sessionService: SessionService
  ) {}
  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenConverted = jwtDecode(this.token);
    }
  }

  deleteNotification(id: string | undefined): void {
    if (!id) {
      console.error('ID della notifica non definito');
      return;
    }
    const confirmation = confirm('Confermi di voler cancellare la notifica?');
    if (confirmation) {
      this.notificationService.deleteNotification(id).subscribe({
        next: (data) => {
          window.location.reload();
        },
        error: (err) => {
          alert("Errore durante l'invio della notifica");
          console.error("Errore durante l'invio della notifica:", err);
        },
      });
    }
  }

  isUserRole(role: ERole): boolean {
    return this.tokenConverted.roles.includes(role) ?? false;
  }
}
