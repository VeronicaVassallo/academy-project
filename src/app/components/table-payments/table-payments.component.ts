import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Payment } from '../../models/payment.model';
import { User } from '../../models/user.model';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrls: ['./table-payments.component.css'],
})
export class TablePaymentsComponent implements OnInit, OnDestroy {
  @Input() paymentsList: Payment[] = [];
  @Input() user: User | null = null;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
}
