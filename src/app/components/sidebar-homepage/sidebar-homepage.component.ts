import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ERole } from '../../models/roles';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-sidebar-homepage',
  templateUrl: './sidebar-homepage.component.html',
  styleUrl: './sidebar-homepage.component.css',
})
export class SidebarHomepageComponent implements OnInit {
  user: User | null = null;
  token: string | null = '';
  tokenConverted: any;
  ERole = ERole;

  constructor(
    private sessionService: SessionService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.token = this.sessionService.getUserTokenFromSession();
    if (this.token) {
      this.tokenConverted = jwtDecode(this.token);
      this.userService.getUserById(this.tokenConverted.id).subscribe({
        next: (user: User | null) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Errore durante la ricezione dei dati:', error);
        },
      });
    }
  }

  isUserRole(role: ERole): boolean {
    return this.tokenConverted.roles.includes(role) ?? false;
  }
}
