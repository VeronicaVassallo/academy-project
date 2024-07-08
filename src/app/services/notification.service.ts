import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  getNotificationUser(id: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/getAll/personal/${id}`
    );
  }

  getAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/getAll`
    );
  }

  sendNotification(body: Notification): Observable<Notification> {
    return this.http.post<Notification>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/save`,
      body
    );
  }
  deleteNotification(id: string) {
    return this.http.delete(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/delete/${id}`
    );
  }
}
