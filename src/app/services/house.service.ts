import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from '../../enviroments/enviroment';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
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

  getAllHouses(): Observable<House[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/getAll`,
      { headers }
    );
  }

  getFreeHouses(): Observable<House[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/getAll/houses/free`,
      { headers }
    );
  }

  getSpecificHouse(userId: string): Observable<House[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/get/houses/by/${userId}`,
      { headers }
    );
  }

  getHousebyId(houseId: string): Observable<House[]> {
    const headers = this.getAuthHeaders();
    return this.http.get<House[]>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/get/${houseId}`,
      { headers }
    );
  }

  createNewHouse(body: House): Observable<House> {
    const headers = this.getAuthHeaders();
    return this.http.post<House>(
      `${enviroment.ANGULAR_APP_SERVER_BASE_URL}house/save`,
      body,
      { headers }
    );
  }
}
