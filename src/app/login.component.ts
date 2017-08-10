import { Component }        from '@angular/core';
import { Router,
         NavigationExtras } from '@angular/router';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  >Login</button>
      <button (click)="logout()" >Logout</button>
    </p>`
})
export class LoginComponent {
  message: string;

  constructor(public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged in';
  }

  login() {
    this.message = 'Trying to log in ...';
  }

  logout() {

    this.setMessage();
  }
}
