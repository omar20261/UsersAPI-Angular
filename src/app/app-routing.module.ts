import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';

const routes : Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:UsersListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
