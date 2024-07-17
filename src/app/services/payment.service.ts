import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Payment } from '../models/payment.model';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private http: HttpClient) {}
  getPaymentHouse(houseId: string): Observable<Payment[]> {
    return this.http
      .get<{ lo: Payment[] }>(
        `${enviroment.ANGULAR_APP_SERVER_BASE_URL}payment/getAll/house/${houseId}`
      )
      .pipe(
        map((response) => {
          if (response && response.lo) {
            return response.lo;
          } else {
            return [];
          }
        }),
        catchError((error: any): Observable<Payment[]> => {
          console.error('Errore durante la ricezione dei dati:', error);
          return of([]);
        })
      );
  }

  sendPayment(body: Payment) {
    return this.http.patch(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}payment/patchUpdate`,
      body
    );
  }

  createNewPayment(body: Payment) {
    return this.http.post(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}payment/save`,
      body
    );
  }
}
