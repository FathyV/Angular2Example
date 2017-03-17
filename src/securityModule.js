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
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const defaultPage_1 = require("./defaultPage");
const securityRoutes_1 = require("./securityRoutes");
const users_1 = require("./users");
const userSummary_1 = require("./userSummary");
const formHorizontal_1 = require("./formHorizontal");
const formInput_1 = require("./formInput");
const formButtonPrimary_1 = require("./formButtonPrimary");
const formButton_1 = require("./formButton");
const page_1 = require("./page");
const httpConnector_1 = require("./httpConnector");
const userService_1 = require("./userService");
const router_1 = require("@angular/router");
const addNewUser_1 = require("./addNewUser");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule, http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoutes_1.SecurityRoutes],
        declarations: [defaultPage_1.DefaultPage, users_1.Users, userSummary_1.UserSummary, formHorizontal_1.FormHorizontal, formInput_1.FormInput, formButtonPrimary_1.FormButtonPrimary, formButton_1.FormButton, page_1.Page, addNewUser_1.AddNewUser],
        bootstrap: [defaultPage_1.DefaultPage],
        providers: [httpConnector_1.HttpConnector, userService_1.UserService],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map