import { Component, Input, OnInit } from '@angular/core';
//echarts
import * as echarts from 'echarts';
import { Usage } from '../../models/usage.model';
@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css',
})
export class GraphComponent implements OnInit {
  @Input() usages: Usage[] = [];
  listMonths: string[] = [];
  ngOnInit(): void {
    this.listMonths = this.usages.map((u) => {
      const date = new Date(u.date);
      return date.toLocaleString('default', { month: 'long' });
    });
    console.log('MESI', this.listMonths);
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('main')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      xAxis: {
        type: 'category',
        data: this.listMonths,
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
  }
}
