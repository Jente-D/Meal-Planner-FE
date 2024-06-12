import { Component } from '@angular/core';
import {LogoutService} from "../../auth/logout/logout.service";


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.css'
})
export class StartScreenComponent {
  logoutMessage: string | null = null;

  constructor(private logoutStatusService: LogoutService) {
    this.observeLogoutStatus();
  }

  observeLogoutStatus() {
    this.logoutStatusService.currentStatus.subscribe(status => {
      if (status) {
        let counter = 8;
        this.logoutMessage = `Succesfully signed out. Returning to homepage in ${counter} seconds...`;

        const intervalId = setInterval(() => {
          counter--;
          if (counter >= 0) {
            this.logoutMessage = `Succesfully signed out. Returning to homepage in ${counter} seconds...`;
          } else {
            this.logoutMessage = null;
            this.logoutStatusService.changeStatus(false);
            clearInterval(intervalId);
          }
        }, 1000);
      }
    });
  }
}
