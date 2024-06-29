import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrl: './form-add-user.component.css',
})
export class FormAddUserComponent implements OnInit {
  url: string =
    'https://gucci-copy-angular-default-rtdb.europe-west1.firebasedatabase.app/user.json';
  dataFormUser!: FormGroup;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.dataFormUser = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      cell: new FormControl('', Validators.required),
      birthDate: new FormControl(null, Validators.required),
      profileImg: new FormControl(''),
      creditCard: new FormControl(''),
      cvv: new FormControl(null),
      expire: new FormControl(null),
      holder: new FormControl(''),
    });
  }
  onSubmitSendData() {
    debugger;
    const dataForm = this.dataFormUser.value;
    this.userService
      .insertUser(this.url, {
        isBuildingManager: false,
        name: dataForm.name,
        email: dataForm.email,
        password: dataForm.password,
        cell: dataForm.cell,
        birthDate: dataForm.birthDate,
        houses: [],
        profileImg: dataForm.profileImg,
        creditCard: dataForm.creditCard,
        cvv: dataForm.cvv,
        expire: dataForm.expire,
        holder: dataForm.holder,
      })
      .subscribe({
        next: (data) => {
          console.log('Dati inseriti');
          alert('Utente Registrato con successo');
        },
        error: (error) => {
          console.error("Errore durante l'inserimento:", error);
        },
      });
  }
}
