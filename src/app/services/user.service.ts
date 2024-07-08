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

  getUser(email: string, password: string): Observable<User> {
    return this.http
      .get<any>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/login/${email}/${password}`
      )
      .pipe(
        map((userFromDB) => ({
          ...userFromDB,
          birthDate: new Date(userFromDB.birthDate),
          expire: new Date(userFromDB.expire),
        }))
      );
  }

  //To Do: da rimuovere
  insertUser(body: {}) {
    return this.http.post(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/save`,
      body
    );
  }

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
