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
const http_1 = require("@angular/http");
const httpConnector_1 = require("./services/httpConnector");
const customForm_1 = require("./components/customForm/customForm");
const page_1 = require("./components/page/page");
const customFormInput_1 = require("./components/customForm/customFormInput/customFormInput");
const formButton_1 = require("./components/customForm/formButton/formButton");
const primaryButton_1 = require("./components/customForm/primaryButton/primaryButton");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    core_1.NgModule({
        imports: [http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [customForm_1.CustomForm, customFormInput_1.CustomFormInput, formButton_1.FormButton, primaryButton_1.PrimaryButton, page_1.Page],
        providers: [httpConnector_1.HttpConnector],
        exports: [customForm_1.CustomForm, customFormInput_1.CustomFormInput, formButton_1.FormButton, primaryButton_1.PrimaryButton, page_1.Page]
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=commonModule.js.map