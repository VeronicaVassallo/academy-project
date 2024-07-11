import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../services/usage.service';
import { ActivatedRoute } from '@angular/router';
import { Usage } from '../../models/usage.model';
import { dateNotInFutureValidator } from '../../validators/date.validators';
import { nonNegativeValidator } from '../../validators/number.validators';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-house-details-homepage',
  templateUrl: './house-details-homepage.component.html',
  styleUrls: ['./house-details-homepage.component.css'],
})
export class HouseDetailsComponent implements OnInit {
  idHouse!: string | null;
  usageList: Usage[] = [];
  months: string[] = [];
  listUsageWater: number[] = [];
  listUsageGas: number[] = [];
  dataForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private usageService: UsageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.idHouse = this.route.snapshot.paramMap.get('idHouse');
    if (this.idHouse) {
      this.loading = true;
      this.usageService.getAllUsagesHouse(this.idHouse).subscribe({
        next: (data: Usage[]) => {
          this.usageList = data;
          this.loading = false;
          this.setUsageData();
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
          this.usageList = [];
          this.loading = false;
        },
      });
    }

    this.dataForm = new FormGroup({
      water: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      gas: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      date: new FormControl(Date.now(), [
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
