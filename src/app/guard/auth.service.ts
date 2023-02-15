import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserAuthenticated(){
    return !!localStorage.getItem('Token')
  }

  

}
