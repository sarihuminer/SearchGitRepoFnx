import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridList, MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { GitHubSearchService } from '../../services/git-hub-search.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CommonModule } from '@angular/common';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { AuthServiceService } from '../../services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-repositories',
  standalone: true,
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatGridList,
    CommonModule,
    FormsModule, // Add FormsModule here
  ],
  templateUrl: './search-repositories.component.html',
  styleUrl: './search-repositories.component.scss',
})
export class SearchRepositoriesComponent {
  keyword: string = '';
  results: any[] = [];
  text: string = '';

  constructor(
    private gitHubService: GitHubSearchService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
    }
  }

  SearchRepositories() {
    this.results = [];
    this.text = 'Loading! please wait.';

    if (this.keyword) {
      this.gitHubService.searchRepositories(this.keyword).subscribe(
        (data) => {
          this.results = data.items;
          if (this.results.length === 0) {
            this.text = 'There are no results.';
          } else {
            this.text = ''; // Clear message if results are found
          }
          console.log(this.results);
        },
        (error) => {
          this.text = 'An error occurred while searching.';
        }
      );
    } else {
      this.text = 'Please enter a search keyword.'; // Prompt if no keyword is entered
    }
  }

  bookmark(repository: any) {
    this.gitHubService.bookmarkRepository(repository).subscribe();
  }
}
