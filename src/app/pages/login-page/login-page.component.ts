import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { ERole } from '../../models/roles';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  showPassword: boolean = false;
  dataLoginForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.dataLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    const body = {
      username: this.dataLoginForm.get('username')!.value,
      email: this.dataLoginForm.get('email')!.value,
      password: this.dataLoginForm.get('password')!.value,
    };

    if (this.dataLoginForm.valid) {
      this.userService.getUser(body).subscribe({
        next: (response: { user: User; accessToken: string }) => {
          const accessToken = response.accessToken;
          console.log('Dati utente decodificati', jwtDecode(accessToken));
          console.log('Dati interi dalla chiamata', response);

          // Salva il token nella sessione
          this.sessionService.setSession(accessToken);

          //Decodifica il token per ottenere i ruoli
          const decodedToken: any = jwtDecode(accessToken);
          const userRoles = decodedToken.roles.split(',');

          if (userRoles.includes(ERole.ROLE_MANAGER)) {
            this.router.navigate(['backoffice']);
          } else if (userRoles.includes(ERole.ROLE_USER)) {
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
