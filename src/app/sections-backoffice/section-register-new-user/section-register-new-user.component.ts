import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
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
  houseSelected: House | null = null;
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
      confirmPassword: new FormControl('', Validators.required),
      cell: new FormControl('', Validators.required),
      birthDate: new FormControl(null, Validators.required),
      profileImg: new FormControl('', Validators.required),
      creditCard: new FormControl('', Validators.required),
      cvv: new FormControl(null, Validators.required),
      expire: new FormControl(null, Validators.required),
      holder: new FormControl('', Validators.required),
    });

    this.houseService.getFreeHouses().subscribe({
      next: (data: any) => {
        if (data && data.lo) {
          this.listFreeHouse = data.lo;
        } else {
          console.log('Non ci sono case a disposizione');
          this.listFreeHouse = [];
        }
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });
  }

  checkPassword(password: string, confirmPassword: string): boolean {
    if (password && confirmPassword && password == confirmPassword) {
      return true;
    } else {
      alert('Le password non corrispondono');
      return false;
    }
  }

  checkHouse(): boolean {
    if (this.houseSelected != null) {
      return true;
    } else {
      alert('Seleziona almeno una casa');
      return false;
    }
  }
  onSubmitSendData() {
    const dataForm = this.dataFormUser.value;
    if (
      this.dataFormUser.valid &&
      this.checkPassword(dataForm.password, dataForm.confirmPassword) &&
      this.checkHouse()
    ) {
      this.userService
        .createUserAndUpdateHouse({
          id: this.houseSelected?.id,
          scala: this.houseSelected?.scala,
          piano: this.houseSelected?.piano,
          interno: this.houseSelected?.interno,
          houseImg: this.houseSelected?.houseImg,
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
            window.location.reload();
          },
          error: (error) => {
            console.error("Errore durante l'inserimento:", error);
          },
        });
    } else {
      console.log("I dati di registrazione dell'utente non sono corretti");
    }
  }

  onGetData(value: House | null) {
    if (value) {
      this.houseSelected = value;
    } else {
      this.houseSelected = null;
    }
  }
}
