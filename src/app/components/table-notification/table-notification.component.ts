import { Component, Input } from '@angular/core';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-table-notification',
  templateUrl: './table-notification.component.html',
  styleUrl: './table-notification.component.css',
})
export class TableNotificationComponent {
  @Input() notficationsList: Notification[] = [];
}
