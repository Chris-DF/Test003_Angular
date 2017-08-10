import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserListComponent }    from './user-list/user-list.component';
import { UserDetailComponent }  from './user-detail/user-detail.component';
import { UserCreateComponent }  from './user-create/user-create.component';
import { UserService } from '../services/user.service';

import { UserRoutingModule } from './users-routing.module';

//独立のモジュールを作ったら、App.moduleにimportするとOKです。
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent
  ],
  providers: [ UserService ]
})
export class UsersModule {}
