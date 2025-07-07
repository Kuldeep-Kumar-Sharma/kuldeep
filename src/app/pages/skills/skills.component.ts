import { Component } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexDataLabels,
  ApexPlotOptions,
  ApexTheme,
  ApexLegend,
  ApexTooltip,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  stroke: ApexStroke;
  markers: ApexMarkers;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  theme: ApexTheme;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  public chartOptions: ChartOptions = {
    series: [
      {
        name: 'Skill Level',
        data: [90, 85, 88, 92, 75, 70],
      },
    ],
    chart: {
      height: 400,
      type: 'radar',
      toolbar: { show: false },
    },
    xaxis: {
      categories: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Node.js',
        'Python',
      ],
      labels: {
        style: {
          colors: [
            '#0067b8',
            '#50a7f7',
            '#ffb900',
            '#7cbb00',
            '#f65314',
            '#a0a0a0',
          ],
          fontSize: '15px',
          fontWeight: 600,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 100,
      tickAmount: 5,
      labels: {
        style: {
          colors: '#888',
        },
      },
    },
    fill: {
      opacity: 0.2,
      colors: ['#0067b8'],
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['#0067b8'],
    },
    markers: {
      size: 5,
      colors: ['#fff'],
      strokeColors: ['#0067b8'],
      strokeWidth: 2,
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {},
    theme: {
      mode: 'light',
    },
    legend: {
      show: false,
    },
    tooltip: {
      enabled: true,
    },
  };
}
