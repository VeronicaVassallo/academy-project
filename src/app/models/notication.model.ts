import { User } from './user.model';

export interface Notification {
  id: string;
  date: Date;
  textt: string;
  referenceUser: User | null | undefined;
}
