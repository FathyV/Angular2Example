import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'user-list',
    templateUrl: 'src/modules/securityModule/components/userList/userList.html'
})

export class UserList {
    @Input() users: any = null;
    @Input() selectedUser: any = null;
    @Output() selectedUserChange: EventEmitter<any> = new EventEmitter<any>();

    public showUserSummary(user: any) {
        this.selectedUser = user;
        this.selectedUserChange.emit(this.selectedUser);
    }    
}