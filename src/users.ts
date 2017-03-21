import { Component } from "@angular/core";
import { UserService } from "./userService"
@Component({
    templateUrl: "src/users.html"
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

    public showUserSummary(user: any) {
        this.selectedUser = user;
    }

    public onFirstNameChanged(newValue: string) {
        this.selectedUser.firstName = newValue;
    }
}