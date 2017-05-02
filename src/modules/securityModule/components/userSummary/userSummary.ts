import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "user-summary",
    templateUrl: "src/modules/securityModule/components/userSummary/userSummary.html"
})

export class UserSummary {
    @Input() firstName: string = null;
    @Output() firstNameChange: EventEmitter<string> = new EventEmitter<string>();    
}