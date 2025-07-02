import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor,MatIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Angular.',
      link: 'https://yourportfolio.com',
    },
    {
      title: 'E-commerce App',
      description: 'A modern e-commerce platform.',
      link: 'https://github.com/yourrepo',
    },
    // Add more projects as needed
  ];
}
