import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [MatListModule, MatButtonModule, NgFor, MatIconModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  experiences = [
    {
      title: 'Senior Developer',
      company: 'Awesome Company',
      duration: '2022 - Present',
      desc: 'Working on Angular and cloud solutions.',
    },
    {
      title: 'Frontend Engineer',
      company: 'Tech Startup',
      duration: '2020 - 2022',
      desc: 'Built modern web apps with Angular and TypeScript.',
    },
    // Add more experiences as needed
  ];
}
