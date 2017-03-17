import {Component} from "@angular/core";

@Component({
    templateUrl: "src/addNewUser.html"
})

export class AddNewUser {
    public firstName: string;
    public onAddUser(){
        console.log(this.firstName);
    }
}