import { Component, Input } from "@angular/core";

@Component({
    selector: "form-button",
    templateUrl: "src/modules/commonModule/components/customForm/formButton/formButton.html"
})

export class FormButton {
    @Input() label: string = null;
    @Input() cls: string = null;
}