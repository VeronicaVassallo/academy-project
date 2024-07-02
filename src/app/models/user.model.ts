export interface User {
  id: string;
  buildingManager: boolean;
  name: string;
  email: string;
  password: string;
  cell: string;
  birthDate: Date;
  profileImg: string;
  creditCard: string;
  cvv: number;
  expire: Date;
  holder: string;
}
