import { ERole } from './roles';

export interface User {
  id: string;
  roles: ERole[];
  username: boolean;
  name: string;
  surname: string;
  email: string;
  password?: string;
  cell: string;
  birthDate: Date;
  profileImg: string;
  creditCard: string;
  cvv: number;
  expire: Date;
  holder: string;
}
