import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service';
import { House } from '../../models/house.model';

@Component({
  selector: 'section-show-houses-backoffice',
  templateUrl: './section-show-houses-backoffice.component.html',
  styleUrl: './section-show-houses-backoffice.component.css',
})
export class SectionShowHousesBackofficeComponent implements OnInit {
  houses: House[] = [];
  constructor(private houseService: HouseService) {}
  ngOnInit(): void {
    debugger;
    this.houseService.getAllHouses().subscribe({
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
