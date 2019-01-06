import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router,public jwtHelper: JwtHelperService) { }

  /**
    * @purpose = check user status
    * @param = none
    * @return = boolean value
  */
  loggedIn(){
    try { return !this.jwtHelper.isTokenExpired(this.loadToken()); }
    catch(e) { localStorage.removeItem('token'); return false }
  }

  /**
    * @purpose = logout
    * @param = none
    * @return = none
  */
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  /**
    * @purpose = store Token
    * @param = none
    * @return = none
  */
  storeToken(token){ localStorage.setItem("token",token);}

  /**
    * @purpose = Token getter
    * @param = none
    * @return = token
  */
  loadToken(){return localStorage.getItem("token"); }

  /**
    * @purpose = load User info
    * @param = none
    * @return = User info
  */
  loadUser(){
    let token = this.loadToken();
    return token?this.jwtHelper.decodeToken(token):{};
  }

}
