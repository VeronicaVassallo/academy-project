import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../models/notification.model';
import { enviroment } from '../../enviroments/enviroment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService
  ) {}

  private getAuthHeaders(): HttpHeaders {
    const token = this.sessionService.getUserTokenFromSession();
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  getNotificationUser(id: string): Observable<Notification[]> {
    return this.http.get<Notification[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/getAll/personal/${id}`,
      { headers: this.getAuthHeaders() }
    );
  }

  getAllNotification(): Observable<Notification[]> {
    return this.http.get<Notification[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/getAll`,
      { headers: this.getAuthHeaders() }
    );
  }

  sendNotification(body: Notification): Observable<Notification> {
    return this.http.post<Notification>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/save`,
      body,
      { headers: this.getAuthHeaders() }
    );
  }
  deleteNotification(id: string) {
    return this.http.delete(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}notification/delete/${id}`,
      { headers: this.getAuthHeaders() }
    );
  }
}
