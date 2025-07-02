import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatProgressBarModule, MatIconModule, NgFor,NgIf],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    {
      name: 'Angular',
      level: 90,
      icon: 'integration_instructions',
      connects: ['TypeScript', 'RxJS', 'HTML/CSS'],
    },
    {
      name: 'TypeScript',
      level: 85,
      icon: 'code',
      connects: ['JavaScript', 'Angular'],
    },
    {
      name: 'JavaScript',
      level: 88,
      icon: 'javascript',
      connects: ['TypeScript', 'Node.js'],
    },
    { name: 'HTML/CSS', level: 92, icon: 'web', connects: ['Angular', 'Sass'] },
    { name: 'Node.js', level: 75, icon: 'storage', connects: ['JavaScript'] },
    { name: 'Python', level: 70, icon: 'memory', connects: [] },
    { name: 'RxJS', level: 80, icon: 'sync_alt', connects: ['Angular'] },
    { name: 'Sass', level: 80, icon: 'brush', connects: ['HTML/CSS'] },
  ];
}
