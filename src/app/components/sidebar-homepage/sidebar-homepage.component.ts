import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-sidebar-homepage',
  templateUrl: './sidebar-homepage.component.html',
  styleUrl: './sidebar-homepage.component.css',
})
export class SidebarHomepageComponent implements OnInit {
  // user: User | null = null; TO DO: da rimuovere il commento quando sara pronta la login
  user: User = {
    id: '12345',
    buildingManager: true,
    name: 'Mario',
    surname: 'Rossi',
    email: 'mario@rossi.com',
    password: 'password',
    cell: '+391234567890',
    birthDate: new Date('1980-01-01T00:00:00Z'),
    profileImg: 'img2.jpg',
    creditCard: '4111111111111111',
    cvv: 123,
    expire: new Date('2025-12-31T00:00:00Z'),
    holder: 'Mario Rossi',
  };
  constructor(private sessionService: SessionService) {}
  ngOnInit(): void {
    // this.user = this.sessionService.getUserFromSession();
  }
}
