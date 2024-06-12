import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {LogoutService} from "../../auth/logout/logout.service";
import {MatDialog} from "@angular/material/dialog";
import {LogoutDialogComponent} from "../../auth/logout/logout-dialog.component";

class LogoutStatusService {
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected authService: AuthService, public dialog: MatDialog) {}

  LogoutClick(): void {
    this.dialog.open(LogoutDialogComponent);
  }
  // constructor(protected authService: AuthService, private router: Router, private logoutService: LogoutService) {}
  //
  // // LogoutClick(): void {
  // //   if (confirm('Are you sure you want to logout? This will end your current session.')) {
  // //     this.authService.logout();
  // //     this.logoutService.changeStatus(true);
  // //     setTimeout(() => {
  // //       this.router.navigate(['/']);
  // //       this.logoutService.changeStatus(false);
  // //     }, 8000);
  // //   }
  // // }
}
