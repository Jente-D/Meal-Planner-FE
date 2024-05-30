import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {LogoutService} from "../../auth/logout.service";

class LogoutStatusService {
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authService: AuthService, private router: Router, private logoutService: LogoutService) {}

  LogoutClick(): void{
    this.authService.logout();
    this.logoutService.changeStatus(true);
    setTimeout(() => {
      this.router.navigate(['/']);
      this.logoutService.changeStatus(false);
    }, 8000);
  }
}
