import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLogged: User | null = null;
  constructor(private sessionService: SessionService) {}
  /*
  isLoggedIn(): boolean {
    // Logica per verificare il token è prendere l'informazione dal token
    return !!localStorage.getItem('userToken');
  }
*/

  isAdmin(): boolean {
    this.userLogged = this.sessionService.getUserFromSession();
    //verifico che l'utente è admin
    if (this.userLogged && this.userLogged.buildingManager) {
      return true;
    } else {
      return false;
    }
  }
}
