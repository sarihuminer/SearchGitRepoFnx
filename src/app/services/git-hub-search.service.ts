import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitHubSearchService {
  private apiUrl = 'https://yourdomain.com/api/github';

  constructor(private http: HttpClient) {}

  searchRepositories(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/repositories?keyword=${keyword}`);
  }

  bookmarkRepository(repository: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/bookmark`, repository);
  }

  getBookmarks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookmarks`);
  }
}
