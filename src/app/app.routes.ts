import { Routes } from '@angular/router';
import {HomeComponent} from "./HomePage/home/home.component";
import {RegisterFormComponent} from "./auth/register-form/register-form.component";
import {LoginFormComponent} from "./auth/login-form/login-form.component";

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'register', component:RegisterFormComponent},
  {path: 'login', component:LoginFormComponent}
];
