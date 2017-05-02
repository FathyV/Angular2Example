"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const defaultPage_1 = require("src/defaultPage");
const securityRoutes_1 = require("./securityRoutes");
const users_1 = require("./components/users/users");
const userSummary_1 = require("./components/userSummary/userSummary");
const http_1 = require("@angular/http");
const commonModule_1 = require("src/modules/commonModule/commonModule");
const userList_1 = require("src/modules/securityModule/components/userList/userList");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoutes_1.SecurityRoutes, commonModule_1.CommonModule],
        declarations: [defaultPage_1.DefaultPage, users_1.Users, userSummary_1.UserSummary, userList_1.UserList],
        bootstrap: [defaultPage_1.DefaultPage],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map