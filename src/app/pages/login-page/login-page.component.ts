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
    /* TO DO: Rimuovere il commente qundo il BE Finisce di sistemare la query di login
    if (this.dataLoginForm.valid) {
      const email = this.dataLoginForm.get('email')?.value;
      const password = this.dataLoginForm.get('password')?.value;
      this.userService.getUser(email, password).subscribe({
        next: (user: User) => {
          this.user = user;
          this.sessionService.setSession(user);

          if (this.user.buildingManager) {
            this.router.navigate(['backoffice']);
          } else {
            this.router.navigate(['homepage']);
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
      */
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
