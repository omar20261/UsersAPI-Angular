import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRoute, ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from '../../Services/Auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,  private router:Router){}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot){
    let url = state.url,
    LogoutURLs=['/login'],
    LogInURLs=[];
    if(this.authService.loggedIn()){
      if(LogoutURLs.indexOf(url) >= 0 && LogInURLs.indexOf(url) < 0){this.router.navigate(['/']);return false;}
      else{return true;}
    }
    else{
      if(LogoutURLs.indexOf(url) >= 0){return true;}
      else{this.router.navigate(['/login']);return false;}
    }
  }
}
