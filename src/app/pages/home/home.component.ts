import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';

interface ProfileData {
  name: string;
  location: string;
  role: string;
  summary: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [HttpClient],
  imports: [NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  profile: ProfileData | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<ProfileData>('assets/data/profile-data.json')
      .subscribe((data) => (this.profile = data));
  }
}
