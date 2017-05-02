import { Component } from "@angular/core";
import { UserService } from "src/modules/securityModule/services/userService"
@Component({
    templateUrl: "src/modules/securityModule/components/users/users.html"
})

export class Users {
    public selectedUser: any;
    public userService: UserService;
    public users: any = [];

    constructor(userService: UserService) {
        this.userService = userService;
        //this.users = userService.getUsers();
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        });
    }

    public onFirstNameChanged(newValue: string) {
        this.selectedUser.firstName = newValue;
    }
}