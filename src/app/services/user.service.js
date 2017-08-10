"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var User = (function () {
    function User(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var USERS = [
    new User(1, 'Mr. Nice', '1'),
    new User(2, '田中', '1'),
    new User(3, '劉', '1'),
    new User(4, 'Mary', '1'),
    new User(5, 'SpiderMan', '1'),
    new User(6, 'ABC', '1')
];
var usersPromise = Promise.resolve(USERS);
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.usersUrl = 'assets/usersInfo.json';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        return usersPromise
            .then(function (users) { return users.find(function (user) { return user.id === +id; }); });
    };
    // restful webAPI呼び出しの例
    UserService.prototype.deleteUser = function (user) {
        var url = this.usersUrl + "/" + user.id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    // TO Connect to サーバ側
    UserService.prototype.createBike = function (user) {
        return this.http
            .post(this.usersUrl, JSON.stringify(user), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error('エラーが発生した', error);
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map