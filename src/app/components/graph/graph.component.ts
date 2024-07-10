import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() listMonths: string[] = [];
  @Input() listUsage: number[] = [];
  @Input() graphId: string = '';

  private myChart: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listMonths'] || changes['listUsage']) {
      this.updateChart();
    }
  }

  ngAfterViewInit(): void {
    this.initChart();
  }

  ngOnDestroy(): void {
    if (this.myChart) {
      this.myChart.dispose();
    }
  }

  private initChart(): void {
    const chartDom = document.getElementById(this.graphId);
    if (chartDom) {
      this.myChart = echarts.init(chartDom);
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (this.myChart) {
      const option: echarts.EChartsOption = {
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
      this.myChart.setOption(option);
    }
  }
}
