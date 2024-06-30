import { Component, Input, Output, EventEmitter } from '@angular/core';
import { House } from '../../models/house.model';

@Component({
  selector: 'app-card-free-house',
  templateUrl: './card-free-house.component.html',
  styleUrl: './card-free-house.component.css',
})
export class CardFreeHouseComponent {
  @Input() freeHouse!: House;
  isSelected: boolean = false;
  @Output() addHouse = new EventEmitter<House | null>();
  houseSelected: House | null = null;

  onSelected() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.houseSelected = this.freeHouse;
    } else {
      this.houseSelected = null;
    }

    this.addHouse.emit(this.houseSelected);
  }
}
