import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-form',
  standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  passwordHidden: boolean = true;
  // TODO verdijnt als gebruiker redirect word naar aangemelde pagina
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  submitLoginForm(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.sendLoginRequest(email, password).subscribe(response => {
        this.authService.saveCredentialsLocally(email, password);
        this.successMessage = 'Successfully logged in!';
        this.router.navigate(['welcome']);
      });
    }
  }
}
