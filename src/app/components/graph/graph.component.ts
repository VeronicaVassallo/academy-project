import {
  Component,
  OnChanges,
  SimpleChanges,
  Input,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import * as echarts from 'echarts';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnChanges, AfterViewInit, OnDestroy {
  @Input() title: string = '';
  @Input() listMonths: string[] = [];
  @Input() listUsage: number[] = [];
  @Input() graphId: string = '';
  @Input() color: string = '';

  private myChart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listMonths'] || changes['listUsage']) {
      this.updateChart();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initChart();
    }
  }

  ngOnDestroy(): void {
    if (this.myChart) {
      this.myChart.dispose();
    }
  }

  private initChart(): void {
    if (isPlatformBrowser(this.platformId)) {
      const chartDom = document.getElementById(this.graphId);
      if (chartDom) {
        this.myChart = echarts.init(chartDom);
        this.updateChart();
      }
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
              color: this.color,
            },
          },
        ],
      };
      this.myChart.setOption(option);
    }
  }
}
