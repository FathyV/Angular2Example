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
const defaultPage_1 = require("./defaultPage");
const securityRoutes_1 = require("./securityRoutes");
const users_1 = require("./users");
const userSummary_1 = require("./userSummary");
const customFormInput_1 = require("./customFormInput");
const customForm_1 = require("./customForm");
const formButton_1 = require("./formButton");
const primaryButton_1 = require("./primaryButton");
const page_1 = require("./page");
const http_1 = require("@angular/http");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule, securityRoutes_1.SecurityRoutes],
        declarations: [defaultPage_1.DefaultPage, users_1.Users, userSummary_1.UserSummary, customFormInput_1.CustomFormInput, customForm_1.CustomForm, formButton_1.FormButton, primaryButton_1.PrimaryButton, page_1.Page],
        bootstrap: [defaultPage_1.DefaultPage],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=securityModule.js.map