import { Component, Input } from "@angular/core"

@Component({
    selector: "primary-button",
    template: '<form-button [label]="label" [cls]="cls" [click]="click"></form-button>'
})

export class PrimaryButton {
    @Input() label: string = null;
    public cls = "btn-primary";
}