import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-sidebar-homepage',
  templateUrl: './sidebar-homepage.component.html',
  styleUrl: './sidebar-homepage.component.css',
})
export class SidebarHomepageComponent implements OnInit {
  user: User | null = null;

  constructor(private sessionService: SessionService) {}
  ngOnInit(): void {
    this.user = this.sessionService.getUserFromSession();
  }
}
