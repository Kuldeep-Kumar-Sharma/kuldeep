import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './pages/home/home.component';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  isDark = false;
  isBrowser: boolean;
  currentLang = 'en'; // Default language

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private translationService: TranslationService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      // Check for saved theme preference
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        this.isDark = true;
        document.body.classList.add('dark-theme');
      }

      // Check for saved language preference
      const savedLang = localStorage.getItem('language');
      if (savedLang && ['en', 'nl', 'fr', 'hi'].includes(savedLang)) {
        this.currentLang = savedLang;
        this.translationService.setLanguage(savedLang);
      }
    }
  }

  toggleTheme() {
    this.isDark = !this.isDark;

    if (this.isDark) {
      document.body.classList.add('dark-theme');
      if (this.isBrowser) {
        localStorage.setItem('theme', 'dark');
      }
    } else {
      document.body.classList.remove('dark-theme');
      if (this.isBrowser) {
        localStorage.setItem('theme', 'light');
      }
    }
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translationService.setLanguage(lang);

    if (this.isBrowser) {
      localStorage.setItem('language', lang);
    }
  }
}
