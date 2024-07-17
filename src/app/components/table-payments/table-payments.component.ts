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

  updatePayment(b: Payment) {
    if (this.user && b.paymentDate && b.house && b.house.id) {
      const body: Payment = {
        id: b.id,
        isPaid: true,
        startDate: b.paymentDate,
        paymentDate: new Date(),
        ongoing: true,
        user: { id: this.user.id },
        house: { id: b.house.id },
        total: b.total,
        description: b.description,
        creditCard: this.user.creditCard,
      };

      this.paymentService.sendPayment(body).subscribe({
        next: (data) => {
          alert('Pagamento aggiornato con successo');
        },
        error: (err) => {
          console.error("Errore durante l'aggiornamento del pagamento", err);
        },
      });
    }
  }
}
