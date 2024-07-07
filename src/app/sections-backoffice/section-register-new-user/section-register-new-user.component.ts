import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { House } from '../../models/house.model';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-section-register-new-user',
  templateUrl: './section-register-new-user.component.html',
  styleUrl: './section-register-new-user.component.css',
})
export class SectionRegisterNewUser implements OnInit {
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
      surname: new FormControl('', Validators.required),
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
      .createUserAndUpdateHouse({
        id: 'idHome', //TO DO: implementa la logica di prendere l'id della casa liberà
        user: {
          buildingManager: false,
          name: dataForm.name,
          surname: dataForm.surname,
          email: dataForm.email,
          password: dataForm.password,
          cell: dataForm.cell,
          birthDate: dataForm.birthDate,
          profileImg: dataForm.profileImg,
          creditCard: dataForm.creditCard,
          cvv: dataForm.cvv,
          expire: dataForm.expire,
          holder: dataForm.holder,
        },
      })
      .subscribe({
        next: (data) => {
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
