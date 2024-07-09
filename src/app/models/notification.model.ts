import { User } from './user.model';

export interface Notification {
  id?: string;
  date: Date;
  text: string;
  user: User | null;
}
