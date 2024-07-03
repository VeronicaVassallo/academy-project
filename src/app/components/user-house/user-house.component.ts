import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-user-house',
  templateUrl: './user-house.component.html',
  styleUrl: './user-house.component.css',
})
export class UserHouseComponent implements OnInit {
  houses: House[] = [];

  constructor(private houseService: HouseService) {}
  ngOnInit(): void {
    this.houseService.getSpecificHouse('id').subscribe({
      next: (data) => {
        this.houses = data;
      },
      error: (err) => {
        console.error('Errore durante la ricezioni dei dati', err);
      },
    });
  }
}
