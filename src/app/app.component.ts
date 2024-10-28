import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchRepositoriesComponent } from './components/search-repositories/search-repositories.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchRepositoriesComponent,
    HomeComponent,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular';
}
