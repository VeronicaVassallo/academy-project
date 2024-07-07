import { House } from './house.model';
import { User } from './user.model';

export interface Payment {
  id: string;
  isPaid: boolean;
  startDate: Date;
  paymentDate: Date;
  ongoing: boolean;
  user: User;
  HouseEntity: House;
  total: number;
  description: string;
  creditCard: String;
}
