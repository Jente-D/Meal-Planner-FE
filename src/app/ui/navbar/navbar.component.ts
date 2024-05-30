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
  constructor(protected authService: AuthService, private router: Router, private logoutStatusService: LogoutService) {}

  LogoutClick(): void{
    this.authService.logout();
    this.logoutStatusService.changeStatus(true);
    setTimeout(() => {
      this.router.navigate(['/']);
      this.logoutStatusService.changeStatus(false);
    }, 8000);
  }
}
