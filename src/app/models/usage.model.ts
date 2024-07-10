import { House } from './house.model';

export interface Usage {
  id?: string;
  house: House | { id: string };
  date: Date;
  water: number;
  gas: number;
}
