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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var UserCreateComponent = (function () {
    function UserCreateComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.display = 'block';
        this.position = 'absolute';
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        this.xxxx = { id: 999, name: "", password: "" };
    };
    UserCreateComponent.prototype.gotoUsers = function () {
        var userId = this.xxxx ? this.xxxx.id : null;
        // fooはダミーです、テストしか
        this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
    };
    UserCreateComponent.prototype.createUser1 = function (name) {
        if (name) {
            this.userName = name;
        }
        /*  this.service
           .createUser(user)
           .then(() => { */
        /*       }); */
    };
    UserCreateComponent.prototype.createUser2 = function (pw) {
        if (pw) {
            this.userPw = pw;
        }
    };
    UserCreateComponent.prototype.createUser = function () {
        if (!this.xxxx) {
            alert("mata undefined");
        }
        if (this.userName && this.userPw) {
            this.xxxx.name = this.userName;
            this.xxxx.password = this.userPw;
            alert("javaのserviceを呼び出して,insert element into DB,which name is " + this.xxxx.name + "and password is " + this.xxxx.password);
        }
    };
    return UserCreateComponent;
}());
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], UserCreateComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], UserCreateComponent.prototype, "position", void 0);
UserCreateComponent = __decorate([
    core_1.Component({
        templateUrl: "../html/user-create.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], UserCreateComponent);
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map