import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';
import { User } from '../../models/user.model';
import { HouseService } from '../../services/house.service';
import { nonNegativeValidator } from '../../validators/number.validators';

@Component({
  selector: 'app-form-add-payment',
  templateUrl: './form-add-payment.component.html',
  styleUrls: ['./form-add-payment.component.css'],
})
export class FormAddPaymentComponent implements OnInit {
  @Input() house_id: string | null = '';
  user: User | null = null;
  paymentForm!: FormGroup;

  constructor(
    private paymentService: PaymentService,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    if (this.house_id) {
      this.houseService.getHousebyId(this.house_id).subscribe({
        next: (data: any) => {
          this.user = data.o.user;
        },
        error: (err) => {
          console.error('Error fetching House:', err);
        },
      });
    }
    this.paymentForm = new FormGroup({
      startDate: new FormControl(new Date(), Validators.required),
      description: new FormControl('', Validators.required),
      total: new FormControl(0, [Validators.required, nonNegativeValidator()]),
    });
  }

  onSubmit() {
    const formValue = this.paymentForm.value;
    if (this.paymentForm.valid && this.house_id && this.user?.id) {
      let body: Payment = {
        isPaid: false,
        startDate: formValue.startDate,
        paymentDate: null,
        ongoing: false,
        user: {
          id: this.user.id,
        },
        house: {
          id: this.house_id,
        },
        total: formValue.total,
        description: formValue.description,
        creditCard: '00000000000000000',
      };
      this.paymentService.createNewPayment(body).subscribe({
        next: (data) => {
          alert('Richiesta Pagamento inviato con successo!');
          window.location.reload();
        },
        error: (err) => {
          console.error(
            "Errore durante l'invio della richiesta del pagamento ",
            err
          );
        },
      });
    }
  }
}
