import { House } from './house.model';
import { User } from './user.model';

export interface Payment {
  id: string;
  isPaid: boolean;
  ongoing: boolean;
  bolletta: string;
  UserEntity: User;
  HouseEntity: House;
  description: string;
  creditCard: String;
}
