import { Component, OnInit } from '@angular/core';
import { UsageService } from '../../services/usage.service';
import { ActivatedRoute } from '@angular/router';
import { Usage } from '../../models/usage.model';
import { dateNotInFutureValidator } from '../../validators/date.validators';
import { nonNegativeValidator } from '../../validators/number.validators';

//echarts
import * as echarts from 'echarts';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usage-homepage',
  templateUrl: './usage-homepage.component.html',
  styleUrl: './usage-homepage.component.css',
})
export class UsageHomepageComponent implements OnInit {
  idHouse!: string | null;
  usageList: Usage[] = [];
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
          this.usageList = data;
          console.log('dati Usage:', this.usageList);
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
          this.usageList = [];
          this.loading = false;
        },
      });
    }

    //echarts

    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)',
          },
        },
      ],
    };

    option && myChart.setOption(option);

    //
    this.dataForm = new FormGroup({
      water: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      gas: new FormControl(0, [Validators.required, nonNegativeValidator()]),
      date: new FormControl(null, [
        Validators.required,
        dateNotInFutureValidator(),
      ]),
    });
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
          },
          error: (err) => {
            console.error("Errore durante l'invio dei dati:", err);
            alert("Errore durante l'invio dei dati:");
          },
        });
    }
  }
}
