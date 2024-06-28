import { House } from './house.model';

export interface User {
  id: string;
  isBuildingManager: boolean;
  name: string;
  email: string;
  password: string;
  cell: string;
  birthDate: Date;
  houses: House[];
  profileImg: string;
  creditCard: string;
  cvv: number;
  expire: Date;
  holder: string;
}
