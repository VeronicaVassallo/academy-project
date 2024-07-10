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
  @Input() listMonths: string[] = [];
  @Input() listUsage: number[] = [];
  @Input() graphId: string = '';

  ngOnInit(): void {
    console.log('lista di numeri', this.listUsage);
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById(this.graphId);
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
          data: this.listUsage,
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
