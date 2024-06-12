import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meal} from "./meal";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly BASE_API_URL: string= 'http://localhost:8080';
  private readonly URL: string= this.BASE_API_URL+'/meals';

  constructor(private httpClient: HttpClient) { }


  getAllMeals(): Observable<any>{
    return this.httpClient.get(this.URL);
  }


  getMealByCalories(minCalories: number, maxCalories: number): Observable<Meal[]> {
    const url = `${this.URL}/filter?minCalories=${minCalories}&maxCalories=${maxCalories}`;
    return this.httpClient.get<Meal[]>(url);
  }
}
