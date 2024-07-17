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

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.css'],
})
export class InfoUserComponent implements OnInit {
  userLogged: User | null = null;
  user: User | null = null;
  dataForm!: FormGroup;

  constructor(
    private userService: UserService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.userLogged = this.sessionService.getUserFromSession();
    this.initializeForm();

    if (this.userLogged) {
      this.userService.getUserById(this.userLogged.id).subscribe({
        next: (u: User | null) => {
          this.user = u;
          if (this.user) {
            this.updateForm(this.user);
          }
        },
        error: (err) => {
          console.error('Error fetching user:', err);
        },
      });
    }
  }

  initializeForm(): void {
    this.dataForm = new FormGroup(
      {
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
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
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): { [key: string]: boolean } | null => {
    if (!(control instanceof FormGroup)) {
      return null;
    }

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsMismatch: true };
  };

  updateForm(user: User): void {
    this.dataForm.patchValue({
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password,
      confirmPassword: user.password,
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
      const body: User = {
        id: this.user.id,
        buildingManager: this.user.buildingManager,
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
          sessionStorage.setItem('user', bodyStringified);
          this.sessionService.setSession(body);
          window.location.reload();
        },
        error: (err) => {
          console.error("Errore durante l'update", err);
        },
      });
    }
  }
}
