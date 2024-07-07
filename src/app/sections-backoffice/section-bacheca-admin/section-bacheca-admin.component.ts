import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'section-bacheca-admin',
  templateUrl: './section-bacheca-admin.component.html',
  styleUrl: './section-bacheca-admin.component.css',
})
export class SectionBachecaAdminComponent implements OnInit {
  @Input() notifications: Notification[] = [];
  listUsers: User[] = [];
  dataForm!: FormGroup;
  constructor(
    private notificationService: NotificationService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.notificationService.getAllNotification().subscribe({
      next: (data: Notification[]) => {
        this.notifications = data;
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });

    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.listUsers = users;
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });

    this.dataForm = new FormGroup({
      text: new FormControl('', Validators.required),
      user: new FormControl(null),
    });
  }

  onSubmit() {
    //TO DO: Continua con la creazione della notifica
    // this.notificationService.sendNotification().subscribe()
  }
}
