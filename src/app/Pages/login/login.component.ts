import { Component, OnInit } from '@angular/core';
import { APIService } from '../../Services/API/api.service';
import {AuthService} from '../../Services/Auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userInfo:any={};
  constructor(private API:APIService,private Auth:AuthService,private router:Router) { }

  ngOnInit() {
  }

  Login(e){
    e.preventDefault();
    if(!this.userInfo.password||!this.userInfo.username){return swal(' ','please enter your username and password', 'warning');}
    this.API.callFun({url:'/auth',method:'POST',data:this.userInfo,noToken:true},(err,d)=>{
      if(d){
        this.Auth.storeToken(d.token);
        this.router.navigate(['/']);
      }
    });
  }

}
