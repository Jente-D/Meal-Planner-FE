import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-succes-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './registration-succes-dialog.component.html',
  styleUrl: './registration-succes-dialog.component.css'
})
export class RegistrationSuccesDialogComponent {
  constructor(public dialogRef: MatDialogRef<RegistrationSuccesDialogComponent>, private router: Router) {}

  closeDialogAndNavigateToLogin() {
    this.dialogRef.close();
    this.router.navigate(['login']);
  }
}
