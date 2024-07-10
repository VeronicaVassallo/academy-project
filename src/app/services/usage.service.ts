import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { Observable, of } from 'rxjs';
import { Usage } from '../models/usage.model';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsageService {
  constructor(private http: HttpClient) {}

  getAllUsagesHouse(idHouse: string): Observable<Usage[]> {
    return this.http
      .get<{ lo: Usage[] }>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}usage/getAll/${idHouse}`
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
      .post<void>(`${enviroment.ANGULAR_APP_SERVER_BASE_URL}usage/save`, body)
      .pipe(
        catchError((error: any): Observable<void> => {
          console.error("Errore durante l'invio dei dati:", error);
          return of();
        })
      );
  }
}
