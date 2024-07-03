import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  listFreeHouse: House[] = [];
  constructor(private http: HttpClient) {}

  getAllHouses(url: string): Observable<House[]> {
    return this.http.get<House[]>(url);
  }
  getFreeHouses(url: string): Observable<House[]> {
    return this.http.get<House[]>(url);
  }
  getSpecificHouse() {
    //Da implementare
  }
}
