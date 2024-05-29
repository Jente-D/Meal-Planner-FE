import { Routes } from '@angular/router';
import {HomeComponent} from "./HomePage/home/home.component";
import {RegisterFormComponent} from "./auth/register-form/register-form.component";

export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'register', component:RegisterFormComponent},
];
