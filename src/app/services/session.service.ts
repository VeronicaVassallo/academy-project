import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userSession: string = '';
  user: User | null = null;

  constructor() {}

  setSession(user: User) {
    this.userSession = JSON.stringify(user);
    sessionStorage.setItem('user', this.userSession);
  }

  getUserFromSession(): User | null {
    let userString = sessionStorage.getItem('user');
    if (userString) {
      this.user = JSON.parse(userString);
    }

    return this.user;
  }
}
