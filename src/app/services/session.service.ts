import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userSession: string = '';
  user: User | null = null;

  constructor() {}
  /*
  setSession(user: User) {
    TO Do: da decommentare quando sara pronto il login 
    if (typeof window !== 'undefined' && window.sessionStorage) {
      this.userSession = JSON.stringify(user);
      sessionStorage.setItem('user', this.userSession);
    }
      
  }
    */
  /*
  getUserFromSession(): User | null {
    TO Do: da decommentare quando sara pronto il login 
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const userString = sessionStorage.getItem('user');
      if (userString) {
        this.user = JSON.parse(userString);
      }
    }

    return this.user;
  }
    */
}
