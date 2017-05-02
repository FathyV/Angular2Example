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
const core_1 = require("@angular/core");
let UserList = class UserList {
    constructor() {
        this.users = null;
        this.selectedUser = null;
        this.selectedUserChange = new core_1.EventEmitter();
    }
    showUserSummary(user) {
        this.selectedUser = user;
        this.selectedUserChange.emit(this.selectedUser);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserList.prototype, "users", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UserList.prototype, "selectedUser", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], UserList.prototype, "selectedUserChange", void 0);
UserList = __decorate([
    core_1.Component({
        selector: 'user-list',
        templateUrl: 'src/modules/securityModule/components/userList/userList.html'
    })
], UserList);
exports.UserList = UserList;
//# sourceMappingURL=userList.js.map