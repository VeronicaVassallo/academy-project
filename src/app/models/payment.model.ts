import { House } from './house.model';
import { User } from './user.model';

export interface Payment {
  id?: string;
  isPaid: boolean;
  startDate: Date;
  paymentDate: Date | null;
  ongoing: boolean;
  user: User | { id: string } | null;
  house: House | { id: string } | null;
  total: number;
  description: string;
  creditCard: String;
}
