import { Component, Input } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { User } from '../../models/user.model';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.css'],
})
export class TablePaymentsComponent {
  @Input() paymentsList: Payment[] = [];
  @Input() user: User | null = null;

  constructor(private paymentService: PaymentService) {}

  trackByPayment(index: number, payment: Payment): string {
    return payment.id!;
  }

  isFullUser(user: any): user is User {
    return (
      (user as User).name !== undefined && (user as User).surname !== undefined
    );
  }
}
