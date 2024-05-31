import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly BASE_API_URL: string='http://localhost:8080/api/v1';
  private readonly AUTH_URL: string = this.BASE_API_URL + '/auth';
  private user: any;

  constructor(private httpClient: HttpClient) { }

  register(userData: any){
    return this.httpClient.post(this.AUTH_URL+'/register', userData)
  }

//  ----- LOGIN ------
  sendLoginRequest(email: string, password: string): Observable<any>{
    return this.httpClient.post(this.AUTH_URL+'/login',
      {"email": email, "password": password},
      {responseType: 'text'}
    )
  }

  saveCredentialsLocally(email: string, password: string): void{
    //   Convert plaintext cerdentials to basic auth token
    const authToken = window.btoa(email + ':' + password);
    //   Build up user object (with username and roles) for keeping logged in user's info
    const loggedInUser = {
      "email": email,
      "basicAuthToken": authToken
    }
    //   save token to localstorage to stay logged in (can also choose cookies)
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser))
    //   set this service's user so usful info like roles/username can be accesed everywher in the app
    this.user = loggedInUser;
  }

  logout(): void{
    this.user=undefined;
    localStorage.removeItem('loggedInUser');
  }

  getLoggedInUser(){
    const storedUser = localStorage.getItem('loggedInUser');
    if(!storedUser){
      throw new Error ('Not logged in');
    }
    this.user = JSON.parse(storedUser);
    return this.user
  }

  getEmail(): String{
    return this.getLoggedInUser().email;
  }

  isLoggedIn(): boolean{
    try {
      this.getLoggedInUser();
      return true;
    } catch (e){
      return false;
    }
  }
}

