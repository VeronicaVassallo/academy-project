import { User } from './user.model';

export interface Usage {
  id: string;
  user: User;
  date: Date;
  water: number;
  gas: number;
}
