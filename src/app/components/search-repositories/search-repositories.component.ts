import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { GitHubSearchService } from '../../services/git-hub-search.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-search-repositories',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule, // Add FormsModule here
  ],
  templateUrl: './search-repositories.component.html',
  styleUrl: './search-repositories.component.scss',
})
export class SearchRepositoriesComponent {
  keyword: string = '';
  results: any[] = [];

  constructor(private gitHubService: GitHubSearchService) {}

  SearchRepositories() {
    if (this.keyword) {
      this.gitHubService.searchRepositories(this.keyword).subscribe((data) => {
        this.results = data.items; 
      });
    }
  }

  bookmark(repository: any) {
    this.gitHubService.bookmarkRepository(repository).subscribe();
  }
}
