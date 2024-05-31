import { Routes } from '@angular/router';
import {HomeComponent} from "./HomePage/home/home.component";
import {RegisterFormComponent} from "./auth/register-form/register-form.component";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {StartScreenComponent} from "./logedIn/start-screen/start-screen.component";
import {VerifyScreenComponent} from "./auth/verify-screen/verify-screen.component";

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'register', component:RegisterFormComponent},
  {path: 'login', component:LoginFormComponent},
  {path:'welcome', component:StartScreenComponent},
  {path:'verify', component:VerifyScreenComponent}
];
