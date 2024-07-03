import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { House } from '../../models/house.model';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-form-add-user',
  templateUrl: './form-add-user.component.html',
  styleUrl: './form-add-user.component.css',
})
export class FormAddUserComponent implements OnInit {
  listFreeHouse: House[] = [];
  listHouseSelected: string[] = [];
  dataFormUser!: FormGroup;
  constructor(
    private userService: UserService,
    private houseService: HouseService
  ) {}
  ngOnInit(): void {
    this.dataFormUser = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      cell: new FormControl('', Validators.required),
      birthDate: new FormControl(null, Validators.required),
      profileImg: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      cvv: new FormControl(null, Validators.required),
      expire: new FormControl(null, Validators.required),
      holder: new FormControl('', Validators.required),
    });

    this.houseService.getFreeHouses().subscribe({
      next: (data: House[]) => {
        this.listFreeHouse = data;
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });
  }
  onSubmitSendData() {
    const dataForm = this.dataFormUser.value;
    this.userService
      .insertUser({
        //TO DO : rimuovi i commenti
        // user:
        //{
        buildingManager: false,
        name: dataForm.name,
        email: dataForm.email,
        password: dataForm.password,
        cell: dataForm.cell,
        birthDate: dataForm.birthDate,
        profileImg: dataForm.profileImg,
        creditCard: dataForm.creditCard,
        cvv: dataForm.cvv,
        expire: dataForm.expire,
        holder: dataForm.holder,
        // },
        // houses: this.listHouseSelected, lista id delle case scelte
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

  onGetData(value: House | null) {
    if (value) {
      this.listHouseSelected.push(value.id);
    }
  }
}
