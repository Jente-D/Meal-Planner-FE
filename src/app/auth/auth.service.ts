import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_API_URL: string='http://localhost:8080/api/v1';
  private readonly AUTH_URL: string = this.BASE_API_URL + '/auth';

  constructor(private http: HttpClient) { }

  register(userData: any){
    return this.http.post(this.AUTH_URL+'/register', userData)
  }
}
