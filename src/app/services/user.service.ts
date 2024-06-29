import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(email: string, password: string): User | undefined {
    //TO DO : get by mail and password...
    const UserFromDB = `
    {
      "id": "1234",
      "isBuildingManager": true,
      "name": "Mario Rossi",
      "email": "mario@rossi.com",
      "password": "password",
      "cell": "+393338567980",
      "birthDate": "1970-05-12",
      "houses": [],
      "profileImg": "photo.jpg",
      "creditCard": "1675898787867258",
      "cvv": 285,
      "expire": "2030-05-12",
      "holder": "Mario Rossi"
    }`;

    const userObj = JSON.parse(UserFromDB);
    const user: User = {
      ...userObj,
      birthDate: new Date(userObj.birthDate),
      expire: new Date(userObj.expire),
    };
    return user;
  }

  insertUser(url: string, body: {}) {
    return this.http.post(url, body);
  }
}
