import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf, NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';
import { fadeIn } from '../../../animations';
import { TranslationService } from '../../services/translation.service';

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
  imports: [NgIf, NgFor, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [fadeIn],
})
export class HomeComponent implements OnInit, OnDestroy {
  profile: ProfileData | null = null;
  skills: string[] = [
    'C# / .NET',
    'Angular',
    'React',
    'TypeScript',
    'SQL Server',
    'Azure',
    'JavaScript',
    'HTML/CSS',
  ];
  translatedSummary = '';
  private langSubscription: Subscription | undefined;

  constructor(
    private http: HttpClient,
    private translationService: TranslationService
  ) {}

  ngOnInit(): void {
    this.http
      .get<ProfileData>('assets/data/profile-data.json')
      .subscribe((data) => {
        this.profile = data;
        this.updateTranslations();
      });

    // Listen for language changes
    this.langSubscription = this.translationService.currentLanguage$.subscribe(
      () => {
        this.updateTranslations();
      }
    );
  }

  ngOnDestroy(): void {
    if (this.langSubscription) {
      this.langSubscription.unsubscribe();
    }
  }

  translate(key: string): string {
    return this.translationService.translate(key);
  }

  // Update the updateTranslations method in home.component.ts
  private updateTranslations() {
    // Use the translate method to get the translated summary
    this.translatedSummary = this.translationService.translate('summary');
  }
}
