import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "user-summary",
    templateUrl: "src/userSummary.html"
})

export class UserSummary {
    @Input() firstName: any = null;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter<string>();
    public onFirstNameChanged(){
        this.firstNameChange.emit(this.firstName);
    }
}