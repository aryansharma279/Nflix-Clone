import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './modules/shared/login/login.component';
import {SignupComponent} from './modules/shared/signup/signup.component';

const routes: Routes = [{
  path: "",
  pathMatch:"full",
  redirectTo: "login"
},{
  path: "login",
  component: LoginComponent
},
{
  path: "signup",
  component: SignupComponent
},{
  path: "**",
  pathMatch: "full",
  redirectTo: "login"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
