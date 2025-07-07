import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { experiences } from './experiences';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [MatIconModule, NgFor, NgClass, NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  experiences = experiences;

  getZigZagPoints(count: number): string {
    // Generates a zig-zag polyline path for the SVG
    const points = [];
    const xLeft = 20;
    const xRight = 80;
    const yStep = 160;
    for (let i = 0; i < count; i++) {
      const x = i % 2 === 0 ? xLeft : xRight;
      const y = i * yStep + 40;
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  }
}
