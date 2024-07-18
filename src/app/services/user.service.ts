import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.sessionService.getUserTokenFromSession();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  //get user by dati di autenticazione
  getUser(body: {
    username: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.http
      .post<any>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}api/auth/signin`,
        body
      )
      .pipe(
        map((userFromDB) => ({
          ...userFromDB,
          birthDate: new Date(userFromDB.birthDate),
          expire: new Date(userFromDB.expire),
        }))
      );
  }

  //Metodo che crea un nuovo utente e aggiorna il campo user della casa: TO DO: Da rivedere logica backend
  createUserAndUpdateHouse(body: {}): Observable<any> {
    return this.http.patch(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/patchUpdate`,
      body,
      { headers: this.getAuthHeaders() }
    );
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/getAll`,
      { headers: this.getAuthHeaders() }
    );
  }

  getUserById(idUser: string): Observable<User | null> {
    return this.http
      .get<{ o: User | null }>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/get/${idUser}`,
        { headers: this.getAuthHeaders() }
      )
      .pipe(
        map((response) => {
          if (response && response.o) {
            return response.o;
          } else {
            return null;
          }
        }),
        catchError((error: any): Observable<User | null> => {
          console.error('Errore durante la ricezione dei dati:', error);
          return of(null);
        })
      );
  }

  updateUser(body: User): Observable<any> {
    return this.http.patch(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}user/patchUpdate`,
      body,
      { headers: this.getAuthHeaders() }
    );
  }
}
