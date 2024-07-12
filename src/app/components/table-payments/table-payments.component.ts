import { Component, Input } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.css'],
})
export class TablePaymentsComponent {
  @Input() paymentsList: Payment[] = [];
  @Input() user: User | null = null;
}
