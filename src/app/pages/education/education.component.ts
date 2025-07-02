import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'IIT Delhi',
      year: '2017 - 2021',
      icon: 'school',
    },
  ];
  certifications = [
    {
      name: 'Google Cloud Certified',
      year: '2023',
      icon: 'workspace_premium',
    },
    {
      name: 'AWS Certified Developer',
      year: '2022',
      icon: 'verified',
    },
  ];
}
