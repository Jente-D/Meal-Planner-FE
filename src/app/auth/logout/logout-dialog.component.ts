import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-logout-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent
  ],
  templateUrl: './logout-dialog.component.html',
  styleUrl: './logout-dialog.component.css'
})
export class LogoutDialogComponent {
  constructor(private authService: AuthService, public dialogRef: MatDialogRef<LogoutDialogComponent>, private router: Router) {}

  closeDialogAndNavigateToHome() {
    this.authService.logout();
    this.dialogRef.close();
    this.router.navigate(['login']);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
