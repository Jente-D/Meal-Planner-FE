import { Component } from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  SubmitRegister() {
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
    }
  }
}
