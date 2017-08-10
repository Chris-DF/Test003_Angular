import { Injectable } from '@angular/core';
import { Headers, Http ,Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export class User {
  public id: number; 
  public name: string;
  public password: string
  constructor( id: number,  name: string, password: string) { }
}
export interface UserI {
   id: number; 
   name: string;
   password: string
 
}
let USERS = [
  new User(1, 'Mr. Nice','1'),
  new User(2, '田中','1'),
  new User(3, '劉','1'),
  new User(4, 'Mary','1'),
  new User(5, 'SpiderMan','1'),
  new User(6, 'ABC','1')
];

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {
   constructor(private http: Http) {

  }
  
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private usersUrl = "assets/usersInfo.json";
  getUsers(): Promise<UserI[]> {
  return this.http.get(this.usersUrl).toPromise()
             .then(response => response.json().body as UserI[] )
             .catch(this.handleError);
}
private extractData(res: Response) {
	    let body = res.json();
        return body;
    }
  getUser(id: number | string) {
    return usersPromise
      // (+) before `id` turns the string into a number
      .then(users => users.find(user => user.id === +id));
  }
  // restful webAPI呼び出しの例
  deleteUser(user: User): Promise<void> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  // TO Connect to サーバ側
  createBike(user: User): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify(user), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as User)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('エラーが発生した', error);
    return Promise.reject(error.message || error);
  }
}
