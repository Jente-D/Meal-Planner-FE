import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LogoutService {
  private logoutStatus = new BehaviorSubject<boolean>(false);
  currentStatus = this.logoutStatus.asObservable();

  changeStatus(status: boolean) {
    this.logoutStatus.next(status);
  }
}
