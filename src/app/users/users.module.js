"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var user_list_component_1 = require("./user-list/user-list.component");
var user_detail_component_1 = require("./user-detail/user-detail.component");
var user_create_component_1 = require("./user-create/user-create.component");
var user_service_1 = require("../services/user.service");
var users_routing_module_1 = require("./users-routing.module");
//独立のモジュールを作ったら、App.moduleにimportするとOKです。
var UsersModule = (function () {
    function UsersModule() {
    }
    return UsersModule;
}());
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            users_routing_module_1.UserRoutingModule
        ],
        declarations: [
            user_list_component_1.UserListComponent,
            user_detail_component_1.UserDetailComponent,
            user_create_component_1.UserCreateComponent
        ],
        providers: [user_service_1.UserService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map