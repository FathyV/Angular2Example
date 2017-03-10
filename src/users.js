"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let Users = class Users {
    constructor() {
        this.users = [
            { firstName: "Hung", lastName: "To", avatar: "01.jpg" },
            { firstName: "Thu", lastName: "Ton", avatar: "02.jpg" },
            { firstName: "Hai", lastName: "Nguyen", avatar: "03.jpg" }
        ];
    }
};
Users = __decorate([
    core_1.Component({
        templateUrl: "src/users.html"
    })
], Users);
exports.Users = Users;
//# sourceMappingURL=users.js.map