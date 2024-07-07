import { House } from './house.model';

export interface Usage {
  id: string;
  house: House;
  date: Date;
  water: number;
  gas: number;
}
