import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent }    from './user-list/user-list.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserCreateComponent }  from './user-create/user-create.component';
const usersRoutes: Routes = [
  { path: 'users',  component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'userCreate', component: UserCreateComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(usersRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
