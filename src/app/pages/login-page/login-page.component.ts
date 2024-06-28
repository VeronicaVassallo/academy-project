import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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
      password: new FormControl('', [Validators.required, Validators.min(8)]),
    });
  }
  onSubmit() {
    if (this.dataLoginForm.valid) {
      const email = this.dataLoginForm.get('email')?.value;
      const password = this.dataLoginForm.get('password')?.value;
      if ((this.user = this.userService.getUser(email, password))) {
        //To DO: l'utente viene reinderizato all'homePage o il backOffice se è l'amministratore
        this.user.isBuildingManager == true
          ? this.router.navigate(['backoffice'])
          : this.router.navigate(['homepage']);
      } else {
        alert('Password o email errate!');
      }
    } else {
      console.log('Form non valido');
    }
  }
}
