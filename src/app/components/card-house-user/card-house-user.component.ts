import { Component, Input, OnInit } from '@angular/core';
import { House } from '../../models/house.model';
import { User } from '../../models/user.model';
import { FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ERole } from '../../models/roles';
import { SessionService } from '../../services/session.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-card-house-user',
  templateUrl: './card-house-user.component.html',
  styleUrl: './card-house-user.component.css',
})
export class CardHouseUserComponent implements OnInit {
  listUsers: User[] = [];
  dataForm!: FormGroup;
  @Input() userHouse!: House;
  token: string | null = '';
  tokenConverted: any;
  ERole = ERole;
  constructor(
    private userService: UserService,
    private sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenConverted = jwtDecode(this.token);
    }
    this.userService.getAllUsers().subscribe({
      next: (users: any) => {
        if (users && users.lo) {
          this.listUsers = users.lo.filter(
            (u: any) => u.roles[0]?.name == 'ROLE_USER'
          );
        } else {
          this.listUsers = [];
        }
        console.log('lista utenti', users);
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });
  }

  isUserRole(role: ERole): boolean {
    return this.tokenConverted.roles.includes(role) ?? false;
  }
}
