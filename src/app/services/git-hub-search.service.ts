import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
@Injectable({
  providedIn: 'root',
})
export class GitHubSearchService {
  private apiUrl = 'https://localhost:44354/api/GitHubRepository';

  constructor(
    private http: HttpClient,
    private authService: AuthServiceService
  ) {}

  searchRepositories(keyword: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = token
      ? new HttpHeaders().set('Authorization', `Bearer ${token}`)
      : undefined;
    return this.http.get(`${this.apiUrl}/search?text=${keyword}`, { headers });
  }

  bookmarkRepository(repository: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookmark`, repository);
  }

  getBookmarks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookmarks`);
  }
}
