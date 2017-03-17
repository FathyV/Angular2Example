import { Component, Input } from "@angular/core";

@Component({
    selector: "form-button-primary",
    templateUrl: "src/formButtonPrimary.html"
})

export class FormButtonPrimary {
    public cls: string = "btn-primary";
    @Input() label: string = null;
}