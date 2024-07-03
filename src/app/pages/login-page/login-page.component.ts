import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { enviroment } from '../../../enviroments/enviroment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent implements OnInit {
  dataLoginForm!: FormGroup;
  user: User | undefined;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.dataLoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
  onSubmit() {
    if (this.dataLoginForm.valid) {
      debugger;
      const email = this.dataLoginForm.get('email')?.value;
      const password = this.dataLoginForm.get('password')?.value;
      this.userService.getUser(email, password).subscribe({
        next: (user: User) => {
          this.user = user;
          console.log(user.buildingManager);
          console.log(user);

          if (this.user.buildingManager) {
            console.log('Navigating to backoffice');
            this.router.navigate(['backoffice']);
          } else {
            console.log('Navigating to homepage');
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
  }
}
