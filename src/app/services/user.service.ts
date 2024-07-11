import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  /*
  getUser(body: { email: string; password: string }): Observable<User> {
    return this.http
      .post<any>(`${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/login`, body)
      .pipe(
        map((userFromDB) => ({
          ...userFromDB,
          birthDate: new Date(userFromDB.birthDate),
          expire: new Date(userFromDB.expire),
        }))
      );
  }
*/
  //Metodo che crea un nuovo utente e aggiorna il campo user della casa:
  createUserAndUpdateHouse(body: {}) {
    return this.http.patch(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/patchUpdate`,
      body
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/getAll`
    );
  }
}
