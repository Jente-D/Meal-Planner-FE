import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class RegisterRequestService {
  private readonly BASE_API_URL: string='http://localhost:8080/api/v1';
  private readonly AUTH_URL: string = this.BASE_API_URL + '/request';
  private user: any;

  constructor(private httpClient: HttpClient) { }

  requestAccount(userData: any){
    return this.httpClient.post(this.AUTH_URL+'/register', userData).pipe(
      map(response => {
        // handle successful response here
        console.log('Registration successful', response);
        return response;
      }),
      catchError(error => {
        // handle error here
        console.log('Registration error', error);
        throw error;
      })
    );
  }
}
