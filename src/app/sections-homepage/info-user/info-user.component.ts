import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'],
})
export class InfoUserComponent implements OnInit {
  userLogged: User | null = null;
  token: string | null = '';
  tokenCeverted: any;
  idUser: string = '';
  user: User | null = null;
  dataForm!: FormGroup;
  loader: boolean = false;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenCeverted = jwtDecode(this.token);
    }

    this.initializeForm();

    if (this.tokenCeverted) {
      this.loader = true;
      this.userService.getUserById(this.tokenCeverted.id).subscribe({
        next: (u: User | null) => {
          this.user = u;
          if (this.user) {
            this.updateForm(this.user);
          }
          this.loader = false;
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        },
      });
    }
  }

  initializeForm(): void {
    this.dataForm = new FormGroup({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      cell: new FormControl('', Validators.required),
      birthDate: new FormControl('', Validators.required),
      profileImg: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      cvv: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3,4}$/),
      ]),
      expire: new FormControl('', Validators.required),
      holder: new FormControl('', Validators.required),
    });
  }

  updateForm(user: User): void {
    this.dataForm.patchValue({
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      cell: user.cell,
      birthDate: new Date(user.birthDate).toISOString().substring(0, 10),
      profileImg: user.profileImg,
      creditCard: user.creditCard,
      cvv: user.cvv,
      expire: new Date(user.expire).toISOString().substring(0, 10),
      holder: user.holder,
    });
  }

  sendUpdateUser() {
    if (this.dataForm.invalid) {
      return;
    }

    const dataFormValue = this.dataForm.value;
    if (this.user) {
      this.loader = false;
      const body: User = {
        id: this.user.id,
        username: this.user.username,
        roles: [...this.user.roles],
        name: dataFormValue.name,
        surname: dataFormValue.surname,
        email: dataFormValue.email,
        password: dataFormValue.password,
        cell: dataFormValue.cell,
        birthDate: new Date(dataFormValue.birthDate),
        profileImg: dataFormValue.profileImg,
        creditCard: dataFormValue.creditCard,
        cvv: dataFormValue.cvv,
        expire: new Date(dataFormValue.expire),
        holder: dataFormValue.holder,
      };

      const bodyStringified = JSON.stringify(body);
      this.userService.updateUser(body).subscribe({
        next: (data) => {
          alert('Dati modificati con successo!');
          this.loader = false;
          this.router.navigate(['login']);
        },
        error: (err) => {
          console.error("Errore durante l'update", err);
        },
      });
    }
  }
}
