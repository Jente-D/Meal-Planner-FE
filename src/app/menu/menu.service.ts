import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Meal} from "./meal/meal";
import {MealType} from "./meal/meal-type";
import {DailyMealPlan} from "./meal/daily-meal-plan";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private readonly BASE_API_URL: string= 'http://localhost:8080';
  private readonly URL: string= this.BASE_API_URL+'/meals';
  private readonly URL_PLAN: string= this.BASE_API_URL+'/mealplan';


  constructor(private httpClient: HttpClient) { }

  getAllMeals(): Observable<any>{
    return this.httpClient.get(this.URL);
  }


  createDailyMealPlan(mealTypes: MealType[], totalCalories: number): Observable<DailyMealPlan> {
    const url = `${this.URL_PLAN}`;
    const params = new HttpParams()
      .set('mealTypes', mealTypes.join(','))
      .set('totalCalories', totalCalories.toString());
    return this.httpClient.post<DailyMealPlan>(url, {}, { params: params });
  }


  getMealByCalories(minCalories: number, maxCalories: number): Observable<Meal[]> {
    const url = `${this.URL}/filter?minCalories=${minCalories}&maxCalories=${maxCalories}`;
    return this.httpClient.get<Meal[]>(url);
  }

}
