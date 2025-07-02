import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { EducationComponent } from './pages/education/education.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    TimelineComponent,
    EducationComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Kuldeep';
  isDark = false;
  lang = 'en';
  sidenavOpened = false;

  languages = ['en', 'hi', 'nl', 'fr'];
  langDisplay: Record<string, string> = {
    en: 'English',
    hi: 'हिन्दी',
    nl: 'Nederlands',
    fr: 'Français',
  };

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('dark-theme', this.isDark);
  }

  switchLang() {
    const idx = this.languages.indexOf(this.lang);
    this.lang = this.languages[(idx + 1) % this.languages.length];
    // Add your i18n logic here
  }
}
