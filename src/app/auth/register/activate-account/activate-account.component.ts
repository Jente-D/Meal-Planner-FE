import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-activate-account',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.css'
})
export class ActivateAccountComponent {
  token: string='';

  constructor(private route: ActivatedRoute, private authService: AuthService) {
  this.activateAccount();
  }

  activateAccount(): void {
    this.token = <string>this.route.snapshot.queryParamMap.get('token');
    this.authService.activateAccount(this.token).subscribe(
      res => console.log('Account activated'),
      err => console.log('Error activating account')
    );
  }

}
