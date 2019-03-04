import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { NotFoundPageComponent } from './Pages/not-found-page/not-found-page.component';
import { AuthGuard } from './Guards/Auth/auth.guard';
import { AboutComponent } from './Pages/about/about.component';
import { ContactComponent } from './Pages/contact/contact.component';

const routes : Routes = [
  {path:'',component:UsersListComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'CONTACT',component:ContactComponent},
  {path:'ABOUT',component:AboutComponent},
  {path:'**',component:NotFoundPageComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
