import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { Observable, of } from 'rxjs';
import { Usage } from '../models/usage.model';
import { catchError, map } from 'rxjs/operators';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root',
})
export class UsageService {
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

  getAllUsagesHouse(idHouse: string): Observable<Usage[]> {
    return this.http
      .get<{ lo: Usage[] }>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}usage/getAll/${idHouse}`,
        { headers: this.getAuthHeaders() }
      )
      .pipe(
        map((response) => {
          if (response && response.lo) {
            return response.lo;
          } else {
            return [];
          }
        }),
        catchError((error: any): Observable<Usage[]> => {
          console.error('Errore durante la ricezione dei dati:', error);
          return of([]);
        })
      );
  }

  postUsagesHome(body: Usage): Observable<void> {
    return this.http
      .post<void>(`${enviroment.ANGULAR_APP_SERVER_BASE_URL}usage/save`, body, {
        headers: this.getAuthHeaders(),
      })
      .pipe(
        catchError((error: any): Observable<void> => {
          console.error("Errore durante l'invio dei dati:", error);
          return of();
        })
      );
  }
}
