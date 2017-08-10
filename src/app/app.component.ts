import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">ユーザー一覧</h1>
    <nav>
      <a routerLink="/users" routerLinkActive="active">ユーザー</a>
      <a routerLink="/login" routerLinkActive="active">ログイン</a>
    </nav>
    <router-outlet></router-outlet>
    <router-outlet name="popup"></router-outlet>
  `
})
export class AppComponent {
}
