import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AuthServiceService } from '../../services/auth-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatSnackBarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onLogin() {
    this.authService.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/search']),
      error: () =>
        this.snackBar.open('Login failed. Please try again.', 'Close', {
          duration: 3000,
        }),
    });
  }
}
