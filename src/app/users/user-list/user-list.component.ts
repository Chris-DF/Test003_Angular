// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/observable/from';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { User, UserService }  from '../../services/user.service';

@Component({
  templateUrl: `../html/user-list.html`,
})
export class UserListComponent implements OnInit {
  users: Observable<User[]>;

  private selectedId: number;

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
     this.users = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getUsers();
      }); 
      
  }

  isSelected(user: User) { return user.id === this.selectedId; }

  onSelect(user: User) {
    this.router.navigate(['/user', user.id]);
  }

 createUser() {
    this.router.navigate(['/userCreate']);
  }
}
