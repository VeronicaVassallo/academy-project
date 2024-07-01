import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-show-houses',
  templateUrl: './show-houses.component.html',
  styleUrl: './show-houses.component.css',
})
export class ShowHousesComponent implements OnInit {
  houses: House[] = [];
  constructor(private houseService: HouseService) {}
  ngOnInit(): void {
    this.houseService
      .getAllHouses('http://localhost:8080/house/getAll')
      .subscribe({
        next: (data: House[]) => {
          console.log('Dati delle case dal BE', data);
          this.houses = data;
        },
        error: (err) => {
          console.error('Errore durante la ricezione dei dati:', err);
        },
      });
  }
}
