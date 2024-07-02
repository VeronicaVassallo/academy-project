import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUser(url: string): Observable<User> {
    return this.http.get<any>(url).pipe(
      map((userFromDB) => ({
        ...userFromDB,
        birthDate: new Date(userFromDB.birthDate),
        expire: new Date(userFromDB.expire),
      }))
    );
  }

  insertUser(url: string, body: {}) {
    return this.http.post(url, body);
  }
}
