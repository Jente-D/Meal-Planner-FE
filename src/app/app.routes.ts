import {ActivatedRoute, Routes} from '@angular/router';
import {HomeComponent} from "./homePage/home/home.component";
import {RegisterFormComponent} from "./auth/register-form/register-form.component";
import {LoginFormComponent} from "./auth/login-form/login-form.component";
import {StartScreenComponent} from "./logedIn/start-screen/start-screen.component";
import {MenuItemsComponent} from "./menu/menu-items/menu-items.component";
import {ActivateAccountComponent} from "./auth/register/activate-account/activate-account.component";


export const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'register', component:RegisterFormComponent},
  {path: 'login', component:LoginFormComponent},
  {path:'welcome', component:StartScreenComponent},
  {path:'meals', component:MenuItemsComponent},
  { path: 'confirm-registration', component: ActivateAccountComponent }
];
