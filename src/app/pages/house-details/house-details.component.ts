import { Component, Input, OnInit } from '@angular/core';
import { UsageService } from '../../services/usage.service';
import { ActivatedRoute } from '@angular/router';
import { Usage } from '../../models/usage.model';
import { dateNotInFutureValidator } from '../../validators/date.validators';
import { nonNegativeValidator } from '../../validators/number.validators';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../models/payment.model';
import { SessionService } from '../../services/session.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css'],
})
export class HouseDetailsComponent implements OnInit {
  idHouse!: string | null;
  userLogged: User | null = null;
  usageList: Usage[] = [];
  months: string[] = [];
  listUsageWater: number[] = [];
  listUsageGas: number[] = [];
  dataForm!: FormGroup;
  loading: boolean = false;
  payments: Payment[] = [];

  constructor(
    private usageService: UsageService,
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.idHouse = this.route.snapshot.paramMap.get('idHouse');
    if (this.idHouse) {
      this.loading = true;
      this.usageService.getAllUsagesHouse(this.idHouse).subscribe({
        next: (data: Usage[]) => {
          this.usageList = data;
          this.setUsageData();
          this.loading = false;
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
          this.usageList = [];
          this.loading = false;
        },
      });

      this.userLogged = this.sessionService.getUserFromSession();

      this.paymentService.getPaymentHouse(this.idHouse).subscribe({
        next: (p: Payment[]) => {
          this.payments = p;
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
          this.payments = [];
        },
      });
    }

    this.dataForm = new FormGroup({
      water: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      gas: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      date: new FormControl(new Date().toISOString().substring(0, 10), [
        Validators.required,
        dateNotInFutureValidator(),
      ]),
    });
  }

  private setUsageData(): void {
    this.months = this.usageList.map((u) => {
      const date = new Date(u.date);
      return date.toLocaleString('default', { month: 'long' });
    });
    this.listUsageWater = this.usageList.map((d) => d.water);
    this.listUsageGas = this.usageList.map((d) => d.gas);
  }

  onSubmitSendDataUsages() {
    const dataUsagesForm = this.dataForm.value;
    if (this.dataForm.valid && this.idHouse) {
      this.usageService
        .postUsagesHome({
          house: { id: this.idHouse },
          date: dataUsagesForm.date,
          water: dataUsagesForm.water,
          gas: dataUsagesForm.gas,
        })
        .subscribe({
          next: () => {
            alert('Dati inviati con successo');
            window.location.reload();
          },
          error: (err) => {
            console.error("Errore durante l'invio dei dati:", err);
            alert("Errore durante l'invio dei dati:");
          },
        });
    }
  }
}
