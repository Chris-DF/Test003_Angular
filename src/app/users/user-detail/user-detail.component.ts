import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { User, UserService }  from '../../services/user.service';

@Component({
  templateUrl: `../html/user-detail.html`,
})
export class UserDetailComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';


  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
        this.service.getUser(params.get('id')))
      .subscribe((user: User) => this.user = user);
  }

  gotoUsers() {
    let userId = this.user ? this.user.id : null;
    // fooはダミーです、テストしか
    this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
  }

   deleteUser(user: User): void {
   /*  this.service
      .deleteUser(user)
      .then(() => { */
        alert("delete element from DB. ///TODO");
/*       }); */
  }
}
