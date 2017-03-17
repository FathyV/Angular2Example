import { Component } from "@angular/core";
import { UserService } from "./userService";
import { Router } from "@angular/router";

@Component({
    templateUrl: "src/users.html"
})

export class Users {
    public router: Router;
    public selectedUser: any;
    public userService: UserService;
    public users: any = [];

    constructor(userService: UserService, router: Router) {
        this.router = router;
        this.userService = userService;
        //this.users = userService.getUsers();
        userService.getUsers().subscribe(users => {
            this.users = users;
        });
        // userService.getUsers().then(users => {
        //     this.users = users;
        // });
    }

    public showUserSummary(user: any) {
        this.selectedUser = user;
    }

    public onAddButtonClicked() {
        this.router.navigate(["/addNewUser"]);
    }
}