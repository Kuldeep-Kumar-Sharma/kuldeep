import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { experiences } from './experiences'; // or paste the array directly

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [MatIconModule, NgFor,NgClass,NgIf],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
})
export class TimelineComponent {
  experiences = experiences;
}
