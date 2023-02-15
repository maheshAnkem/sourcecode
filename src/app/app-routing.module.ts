import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDataComponent } from './form-data/form-data.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
{ path: 'login', component: LoginComponent },
{ path: 'form-data', component: FormDataComponent  ,canActivate:[AuthGuard] }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
