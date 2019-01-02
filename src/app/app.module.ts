import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http' ;
import { JwtModule } from '@auth0/angular-jwt';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { HeaderComponent } from './Components/header/header.component';
import { AddUserPopUpComponent } from './Components/add-user-pop-up/add-user-pop-up.component';
import { DeleteUserPopUpComponent } from './Components/delete-user-pop-up/delete-user-pop-up.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';

export function tokenGetterFun(){return localStorage.getItem('token')}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    HeaderComponent,
    AddUserPopUpComponent,
    DeleteUserPopUpComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({config: {tokenGetter:tokenGetterFun}}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
