import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
];
