import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UsersListComponent } from './Pages/users-list/users-list.component';

const routes : Routes = [
  {path:'',component:LoginComponent},
  {path:'UsersList',component:UsersListComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
