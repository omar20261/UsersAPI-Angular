import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,public jwtHelper: JwtHelperService) { }

  loggedIn(){ return !this.jwtHelper.isTokenExpired(this.loadToken()); }

  logout(){ localStorage.removeItem('token');
      this.router.navigate(['/login']);}

  storeToken(token){
      localStorage.setItem("token",token);}

  loadToken(){return localStorage.getItem("token"); }

  loadUser(){
    let token = this.loadToken();
    return token?this.jwtHelper.decodeToken(token):{};
  }

}
