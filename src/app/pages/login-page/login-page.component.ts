import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  showPassword: boolean = false;
  dataLoginForm!: FormGroup;
  user: User | undefined;
  body: { email: string; password: string } | null = null;
  constructor(
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService
  ) {}
  ngOnInit(): void {
    this.dataLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    this.body = {
      email: this.dataLoginForm.get('email')?.value,
      password: this.dataLoginForm.get('password')?.value,
    };

    if (this.dataLoginForm.valid && this.body) {
      this.userService.getUser(this.body).subscribe({
        next: (u: User) => {
          this.user = u;
          console.log('Dati utente', u);
          this.sessionService.setSession(this.user);

          if (this.user.buildingManager) {
            this.router.navigate(['backoffice']);
          } else if (!this.user.buildingManager && this.user.id != null) {
            this.router.navigate(['homepage']);
          } else {
            alert('Password o email errate!');
            this.router.navigate(['login']);
          }
        },
        error: (err) => {
          console.error('Error fetching user:', err);
          alert('Password o email errate!');
        },
      });
    } else {
      console.log('Form non valido');
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
