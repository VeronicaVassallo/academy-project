import { Component, Input } from '@angular/core';
import { Notification } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-table-notification',
  templateUrl: './table-notification.component.html',
  styleUrl: './table-notification.component.css',
})
export class TableNotificationComponent {
  @Input() notficationsList: Notification[] = [];

  constructor(private notificationService: NotificationService) {}

  deleteNotification(id: string | undefined): void {
    confirm('Confermi di voler cancellare la modifica');
    if (id) {
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
