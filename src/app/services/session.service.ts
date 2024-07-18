import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  userSession: string = '';
  user: User | null = null;

  constructor() {}

  setSession(token: string) {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      sessionStorage.setItem('user', token);
    }
  }

  getUserTokenFromSession(): string | null {
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const token = sessionStorage.getItem('user');
      return token;
    } else {
      return '';
    }
  }
}
