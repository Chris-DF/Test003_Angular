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
var UserDetailComponent = (function () {
    function UserDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.display = 'block';
        this.position = 'absolute';
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.service.getUser(params.get('id'));
        })
            .subscribe(function (user) { return _this.user = user; });
    };
    UserDetailComponent.prototype.gotoUsers = function () {
        var userId = this.user ? this.user.id : null;
        // fooはダミーです、テストしか
        this.router.navigate(['/users', { id: userId, foo: 'foo' }]);
    };
    UserDetailComponent.prototype.deleteUser = function (user) {
        /*  this.service
           .deleteUser(user)
           .then(() => { */
        alert("delete element from DB. ///TODO");
        /*       }); */
    };
    return UserDetailComponent;
}());
__decorate([
    core_1.HostBinding('style.display'),
    __metadata("design:type", Object)
], UserDetailComponent.prototype, "display", void 0);
__decorate([
    core_1.HostBinding('style.position'),
    __metadata("design:type", Object)
], UserDetailComponent.prototype, "position", void 0);
UserDetailComponent = __decorate([
    core_1.Component({
        templateUrl: "../html/user-detail.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_service_1.UserService])
], UserDetailComponent);
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user-detail.component.js.map