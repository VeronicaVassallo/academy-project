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
      next: (data: any) => {
        if (data && data.lo) {
          this.notifications = data.lo;
        } else {
          console.log('Non ci sono case a disposizione');
          this.notifications = [];
        }
      },
      error: (err) => {
        console.error('Errore durante la ricezione dei dati:', err);
      },
    });

    this.userService.getAllUsers().subscribe({
      next: (users: any) => {
        if (users && users.lo) {
          this.listUsers = users.lo.filter(
            (u: User) => u.buildingManager === false
          );
        } else {
          console.log('Non ci sono case a disposizione');
          this.listUsers = [];
        }
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
    if (this.dataForm.valid) {
      const formValue = this.dataForm.value;
      const notification: any = {
        date: new Date(),
        text: formValue.text,
        user: formValue.user ? { id: formValue.user } : null,
      };

      this.notificationService.sendNotification(notification).subscribe({
        next: () => {
          alert('Notifica inviata con successo');
          window.location.reload();
        },
        error: (err) => {
          alert("Errore durante l'invio della notifica");
          console.error("Errore durante l'invio della notifica:", err);
        },
      });
    }
  }
}
