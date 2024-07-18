import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-modal-add-house',
  templateUrl: './modal-add-house.component.html',
  styleUrl: './modal-add-house.component.css',
})
export class ModalAddHouseComponent implements OnInit, OnDestroy {
  listUsers: User[] = [];
  dataForm!: FormGroup;
  constructor(
    private userService: UserService,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: any) => {
        if (users && users.lo) {
          this.listUsers = users.lo.filter(
            (u: any) => u.roles[0]?.name == 'ROLE_USER'
          );
        } else {
          this.listUsers = [];
        }
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });

    this.dataForm = new FormGroup({
      scala: new FormControl('', Validators.required),
      piano: new FormControl('', Validators.required),
      interno: new FormControl('', Validators.required),
      houseImg: new FormControl('', Validators.required),
      user: new FormControl(null),
    });
  }

  createHouse() {
    const dataFormValue = this.dataForm.value;
    this.houseService
      .createNewHouse({
        scala: dataFormValue.scala,
        piano: dataFormValue.piano,
        interno: dataFormValue.interno,
        user: dataFormValue.user,
        houseImg: dataFormValue.houseImg,
      })
      .subscribe({
        next: (data) => {
          alert('Casa creata con successo');
          window.location.reload();
        },
        error: (err) => {
          alert('Errore durante la creazione della casa');
          console.error('Errore durante la creazione della casa:', err);
        },
      });
  }
  ngOnDestroy(): void {}
}
