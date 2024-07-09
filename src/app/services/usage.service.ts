import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { enviroment } from '../../enviroments/enviroment';
import { Observable } from 'rxjs';
import { Usage } from '../models/usage.model';
@Injectable({
  providedIn: 'root',
})
export class UsageService {
  constructor(private http: HttpClient) {}

  getAllUsagesHouse(idHouse: string): Observable<Usage[]> {
    return this.http.get<Usage[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}usage/getAll/${idHouse}`
    );
  }
}
