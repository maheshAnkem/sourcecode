import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router, private api: AuthService){}
  canActivate(){
    

    if(this.api.isUserAuthenticated()){
      return true
    }

    alert('Login failed')
    this.router.navigate(['login'])
    return false



  }
  
}
