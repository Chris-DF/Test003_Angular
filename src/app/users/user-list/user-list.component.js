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
// TODO SOMEDAY: Feature Componetized like CrisisCenter
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/filter");
require("rxjs/add/observable/from");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var UserListComponent = (function () {
    function UserListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.route.paramMap
            .switchMap(function (params) {
            // (+) before `params.get()` turns the string into a number
            _this.selectedId = +params.get('id');
            return _this.service.getUsers();
        });
    };
    UserListComponent.prototype.isSelected = function (user) { return user.id === this.selectedId; };
    UserListComponent.prototype.onSelect = function (user) {
        this.router.navigate(['/user', user.id]);
    };
    UserListComponent.prototype.createUser = function () {
        this.router.navigate(['/userCreate']);
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        templateUrl: "../html/user-list.html",
    }),
    __metadata("design:paramtypes", [user_service_1.UserService,
        router_1.ActivatedRoute,
        router_1.Router])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map