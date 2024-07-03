import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  constructor(private http: HttpClient) {}

  getAllHouses(): Observable<House[]> {
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/getAll`
    );
  }
  getFreeHouses(): Observable<House[]> {
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/getAll/houses/free`
    );
  }
  //mi ritorna la casa dell'utente specifico
  getSpecificHouse(userId: string): Observable<House[]> {
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/get/houses/by/${userId}`
    );
  }
}
