import { Component, Input, OnInit } from '@angular/core';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-table-payments',
  templateUrl: './table-payments.component.html',
  styleUrl: './table-payments.component.css',
})
export class TablePaymentsComponent implements OnInit {
  isOpen: boolean = false;
  @Input() paymentsList: Payment[] = [];
  openModal() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
