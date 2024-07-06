import { Component, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { HouseService } from '../../services/house.service';
import { SessionService } from '../../services/session.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-section-show-user-house-homepage',
  templateUrl: './section-show-user-house-homepage.component.html',
  styleUrl: './section-show-user-house-homepage.component.css',
})
export class SectionShowUserHouseHomepageComponent implements OnInit {
  user: User | null = null;
  houses: House[] = [];
  message: boolean = false;

  constructor(
    private houseService: HouseService,
    private sessionService: SessionService
  ) {}
  ngOnInit(): void {
    this.user = this.sessionService.getUserFromSession();
    if (this.user) {
      this.houseService.getSpecificHouse(this.user?.id).subscribe({
        next: (data) => {
          this.houses = data;
        },
        error: (err) => {
          console.error('Errore durante la ricezioni dei dati', err);
        },
      });
    } else {
      this.message = true;
    }
  }
}
