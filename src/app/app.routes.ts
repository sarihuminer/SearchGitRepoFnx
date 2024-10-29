import { Routes } from '@angular/router';
import { SearchRepositoriesComponent } from './components/search-repositories/search-repositories.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: SearchRepositoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchRepositoriesComponent },
  { path: '**', redirectTo: 'login' }, // Fallbac
];
