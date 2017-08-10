import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User, UserService }  from '../../services/user.service';

@Component({
  templateUrl: `../html/user-create.html`,
})
export class UserCreateComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  public xxxx: User;
  userName:string; 
  userPw:string; 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
     this.xxxx = {id:999,name:"",password:""};
  }

  gotoUsers() {
    let userId = this.xxxx ? this.xxxx.id : null;
    // fooはダミーです、テストしか
    this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
  }

   createUser1(name:string): void {
     if(name){
        this.userName = name;
     }
   /*  this.service
      .createUser(user)
      .then(() => { */
       
/*       }); */
  }
    createUser2(pw:string): void {
     if(pw){
       this.userPw = pw;
     }
    }
    createUser():void{
      if(!this.xxxx){
        alert("mata undefined");
      }
      if(this.userName && this.userPw){
        this.xxxx.name = this.userName;
        this.xxxx.password = this.userPw;
        alert("javaのserviceを呼び出して,insert element into DB,which name is "+  this.xxxx.name + "and password is " + this.xxxx.password)
      }
      
    }
}
