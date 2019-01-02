import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';
import { AuthGuard } from './Guards/Auth/auth.guard';

const routes : Routes = [
  {path:'',component:UsersListComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
