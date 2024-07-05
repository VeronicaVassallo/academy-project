import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-bacheca-admin',
  templateUrl: './bacheca-admin.component.html',
  styleUrl: './bacheca-admin.component.css',
})
export class BachecaAdminComponent implements OnInit {
  @Input() notifications: Notification[] = [];
  constructor(private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.notificationService.getAllNotification().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data;
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });
  }
}
