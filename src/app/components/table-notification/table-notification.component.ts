import { Component, Input } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-table-notification',
  templateUrl: './table-notification.component.html',
  styleUrl: './table-notification.component.css',
})
export class TableNotificationComponent {
  @Input() notficationsList: Notification[] = [];
  userLogged: User | null = null;

  constructor(
    private notificationService: NotificationService,
    private sessionService: SessionService
  ) {}

  deleteNotification(id: string | undefined): void {
    this.userLogged = this.sessionService.getUserFromSession();
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
}
