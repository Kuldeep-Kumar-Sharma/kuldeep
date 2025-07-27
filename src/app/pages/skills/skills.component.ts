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
  ApexNonAxisChartSeries,
  ApexGrid
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis?: ApexXAxis;
  yaxis?: ApexYAxis;
  fill: ApexFill;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  theme: ApexTheme;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  labels?: string[];
  colors?: string[];
  grid?: ApexGrid;
};

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgApexchartsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  // Technical Skills Chart - Horizontal Bar (Professional)
  public technicalSkillsChart: ChartOptions = {
    series: [
      {
        name: 'Proficiency Level',
        data: [90, 85, 88, 92, 80, 75, 85, 70],
      },
    ],
    chart: {
      height: 320,
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '70%',
        dataLabels: {
          position: 'center',
        },
      },
    },
    xaxis: {
      categories: [
        'C# / .NET Core',
        'Angular/React',
        'JavaScript/TypeScript',
        'SQL Server',
        'Web APIs',
        'Entity Framework',
        'HTML/CSS',
        'Node.js',
      ],
      max: 100,
      labels: {
        formatter: function (val: any) {
          return val + '%';
        },
        style: {
          fontSize: '11px',
          colors: '#888',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          colors: '#323130',
        },
      },
    },
    fill: {
      colors: ['#0078d4'],
      opacity: 0.85,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + '%';
      },
      style: {
        fontSize: '11px',
        colors: ['#fff'],
        fontWeight: 600,
      },
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + '% proficiency';
        },
      },
    },
    theme: {
      mode: 'light',
    },
    legend: {
      show: false,
    },
  };

  // DevOps & Tools Chart - Horizontal Bar (Professional)
  public devOpsChart: ChartOptions = {
    series: [
      {
        name: 'Proficiency Level',
        data: [85, 80, 75, 70, 88, 82],
      },
    ],
    chart: {
      height: 320,
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 6,
        barHeight: '70%',
      },
    },
    xaxis: {
      categories: [
        'Azure DevOps',
        'Docker',
        'Git/GitHub',
        'Jenkins',
        'Azure Cloud',
        'SQL Server Management',
      ],
      max: 100,
      labels: {
        formatter: function (val: any) {
          return val + '%';
        },
        style: {
          fontSize: '11px',
          colors: '#888',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: '12px',
          fontWeight: 500,
          colors: '#323130',
        },
      },
    },
    fill: {
      colors: ['#106ebe'],
      opacity: 0.85,
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any) {
        return val + '%';
      },
      style: {
        fontSize: '11px',
        colors: ['#fff'],
        fontWeight: 600,
      },
    },
    grid: {
      show: true,
      borderColor: '#f1f1f1',
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + '% proficiency';
        },
      },
    },
    theme: {
      mode: 'light',
    },
    legend: {
      show: false,
    },
  };

  // Project Management & Methodologies Chart - Donut (Category Overview)
  public projectChart: ChartOptions = {
    series: [90, 85, 80, 75, 88],
    chart: {
      height: 320,
      type: 'donut',
      toolbar: { show: false },
    },
    labels: [
      'Agile/Scrum',
      'Project Planning',
      'Team Leadership',
      'Requirements Analysis',
      'Code Review',
    ],
    colors: ['#40e0ff', '#0078d4', '#106ebe', '#005a9e', '#0086f0'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Avg Score',
              fontSize: '14px',
              fontWeight: 600,
              color: '#40e0ff',
              formatter: function (w: any) {
                const total = w.globals.seriesTotals.reduce(
                  (a: any, b: any) => a + b,
                  0
                );
                return Math.round(total / w.globals.series.length) + '%';
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      fontSize: '11px',
      fontWeight: 500,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + '% proficiency';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    theme: {
      mode: 'light',
    },
  };

  // Soft Skills Chart - Donut (Category Overview)
  public softSkillsChart: ChartOptions = {
    series: [95, 90, 88, 92, 85, 90],
    chart: {
      height: 320,
      type: 'donut',
      toolbar: { show: false },
    },
    labels: [
      'Problem Solving',
      'Communication',
      'Team Collaboration',
      'Adaptability',
      'Time Management',
      'Learning Ability',
    ],
    colors: ['#0078d4', '#106ebe', '#40e0ff', '#005a9e', '#0086f0', '#4a9eff'],
    plotOptions: {
      pie: {
        donut: {
          size: '60%',
          labels: {
            show: true,
            total: {
              show: true,
              label: 'Avg Score',
              fontSize: '14px',
              fontWeight: 600,
              color: '#0078d4',
              formatter: function (w: any) {
                const total = w.globals.seriesTotals.reduce(
                  (a: any, b: any) => a + b,
                  0
                );
                return Math.round(total / w.globals.series.length) + '%';
              },
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: 'bottom',
      fontSize: '11px',
      fontWeight: 500,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return val + '% proficiency';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    theme: {
      mode: 'light',
    },
  };
}
