import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FeedbackResult} from "angular-password-strength-meter";
import {MatDialog} from "@angular/material/dialog";
import {
  RegistrationSuccesDialogComponent
} from "../register/registration-succes-dialog/registration-succes-dialog.component";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  submitted = false;
  passwordFeedback: FeedbackResult= { score: 0, feedback: { warning: '', suggestions: [] } };
  passwordStrength: number = 0;
  errorMessage: string | null = null;
  passwordHidden: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, public dialog:MatDialog) {
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.\\-_\\+]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(12),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[.?!]).{12,}')
      ]),
    });
  }

  checkPasswordStrength(password: string) {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[.?!]/.test(password);
    const isLongEnough = password.length >= 12;

    this.passwordStrength = 0;

    if (hasUpperCase) {
      this.passwordStrength++;
    }
    if (hasLowerCase) {
      this.passwordStrength++;
    }
    if (hasNumber) {
      this.passwordStrength++;
    }
    if (hasSpecialChar) {
      this.passwordStrength++;
    }
    if (isLongEnough) {
      this.passwordStrength++;
    }
  }

  onPasswordChange() {
    const password = this.registerForm.get('password')?.value;
    if (password) {
      this.checkPasswordStrength(password);
    }
  }

  SubmitRegister() {
    this.submitted = true;
    if (this.registerForm.valid) {
      const formValue = this.registerForm.value;
      this.authService.register(formValue).subscribe(
        response => {
          // handle successful registration here
          console.log('Registration successful', response);
          this.openDialog();
        },
        error => {
          console.log('Registration error', error);
          if (error.status === 500) {
            this.errorMessage = 'Unable to register. Please try again or login if you already have an account.';
          }
        }
      );
    }
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  openDialog(){
    const dialogRef = this.dialog.open(RegistrationSuccesDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
