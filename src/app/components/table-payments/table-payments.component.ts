import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { User } from '../../models/user.model';
import { PaymentService } from '../../services/payment.service';
import { ERole } from '../../models/roles';
import { SessionService } from '../../services/session.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.css'],
})
export class TablePaymentsComponent implements OnInit {
  @Input() paymentsList: Payment[] = [];
  @Input() user: User | null = null;
  token: string | null = '';
  tokenConverted: any;
  ERole = ERole;
  loader: boolean = false;

  constructor(
    private paymentService: PaymentService,
    private sessionService: SessionService
  ) {}
  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenConverted = jwtDecode(this.token);
    }
  }

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
        user: {
          id: this.user.id,
          // password: this.user.password,
          // email: this.user.email,
        },
        house: { id: b.house.id },
        total: b.total,
        description: b.description,
        creditCard: this.user.creditCard,
      };
      this.loader = true;
      this.paymentService.sendPayment(body).subscribe({
        next: (data) => {
          alert('Pagamento aggiornato con successo');
          this.loader = false;
          window.location.reload();
        },
        error: (err) => {
          console.error("Errore durante l'aggiornamento del pagamento", err);
        },
      });
    }
  }

  isUserRole(role: ERole): boolean {
    return this.tokenConverted?.roles.includes(role) ?? false;
  }
}
