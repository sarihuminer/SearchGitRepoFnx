import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchRepositoriesComponent } from "./components/search-repositories/search-repositories.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchRepositoriesComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular';
}
