import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private tokenKey = 'auth_token'; // Key to store token in localStorage

  constructor(private http: HttpClient, private router: Router) {}

  // Call this to login and obtain the token
  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>('https://localhost:44354/api/Auth/login', {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem(this.tokenKey, response.token);
          }
        })
      );
  }

  // Helper function to get token
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Helper function to check token existence
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Call this to log out
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }
}
