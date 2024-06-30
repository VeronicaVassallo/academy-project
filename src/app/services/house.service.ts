import { Injectable } from '@angular/core';
import { House } from '../models/house.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  listFreeHouse: House[] = [];
  constructor(private http: HttpClient) {}

  getAllHouses(url: string) {
    /*Da implementare...
    return this.http.get(url);*/
  }
  getFreeHouses(url: string) {
    //const free = this.http.get(url);
    let freeHousesFromDB = `[
    {
        "id": "house1",
        "scala": "A",
        "piano": 3,
        "interno": 12,
        "UserEntity": null,
        "houseImg": "https://www.aluser.com/wp-content/uploads/2017/03/2Condominiali_Schuco_2_Milano.jpg",
        "gas": 120,
        "water": 200
    },
    {
        "id": "house2",
        "scala": "B",
        "piano": 2,
        "interno": 5,
        "UserEntity": null,
        "houseImg": "https://www.br1infissi.it/blog/wp-content/uploads/2019/11/porta.in_.alluminio.su_.abitazione.privata.B.jpg",
        "gas": 90,
        "water": 150
    },
    {
        "id": "house3",
        "scala": "C",
        "piano": 1,
        "interno": 8,
        "UserEntity": null,
        "houseImg": "https://www.aluser.com/wp-content/uploads/2017/03/2Condominiali_Schuco_2_Milano.jpg",
        "gas": 110,
        "water": 180
    },
    {
        "id": "house4",
        "scala": "A",
        "piano": 4,
        "interno": 15,
        "UserEntity": null,
        "houseImg": "https://www.br1infissi.it/blog/wp-content/uploads/2019/11/porta.in_.alluminio.su_.abitazione.privata.B.jpg",
        "gas": 130,
        "water": 210
    },
    {
        "id": "house5",
        "scala": "B",
        "piano": 5,
        "interno": 3,
        "UserEntity": null,
        "houseImg": "https://www.aluser.com/wp-content/uploads/2017/03/2Condominiali_Schuco_2_Milano.jpg",
        "gas": 95,
        "water": 160
    }
  ]`;

    const obj = JSON.parse(freeHousesFromDB);
    return obj;
  }
  getSpecificHouse() {
    //Da implementare
  }
}
