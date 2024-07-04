import { Component, Input } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-card-house-user',
  templateUrl: './card-house-user.component.html',
  styleUrl: './card-house-user.component.css',
})
export class CardHouseUserComponent {
  @Input() freeHouse!: House;
}
