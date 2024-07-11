import { Component, Input } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-card-house-homepage',
  templateUrl: './card-house-homepage.component.html',
  styleUrl: './card-house-homepage.component.css',
})
export class CardHouseHomepageComponent {
  @Input() userHouse!: House;
}
