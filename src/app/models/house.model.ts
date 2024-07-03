import { User } from './user.model';

export interface House {
  id: string;
  scala: string;
  piano: number;
  interno: number;
  user: User;
  houseImg: string;
  gas: number;
  water: number;
}
