import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FeedbackResult} from "angular-password-strength-meter";

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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9.\\-_]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')
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
          this.router.navigate(['']); // navigate to home page
        },
        error => {
          // handle error here
          console.error('Registration error', error);
        }
      );
    } else {
      console.error('Form is not valid');
      this.registerForm.markAllAsTouched();
    }
  }
}
