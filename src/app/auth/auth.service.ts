import { Injectable } from '@angular/core';
import { SessionService } from '../services/session.service';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private sessionService: SessionService) {}

  private getDecodedToken(): any {
    const token = this.sessionService.getUserTokenFromSession();

    if (!token) {
      return null; //Nessun token disponibile
    }

    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Token non valido:', error);
      return null; //Token non valido
    }
  }

  isAdmin(): boolean {
    const decodedToken = this.getDecodedToken();

    if (decodedToken && decodedToken.roles) {
      return decodedToken.roles.includes('ROLE_MANAGER');
    }

    return false;
  }
}
