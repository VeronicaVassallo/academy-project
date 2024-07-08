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
    this.houseService.getAllHouses().subscribe({
      next: (data: any) => {
        if (data && data.lo) {
          this.houses = data.lo;
        } else {
          console.log('Non ci sono case a disposizione');
          this.houses = [];
        }
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });
  }
}
