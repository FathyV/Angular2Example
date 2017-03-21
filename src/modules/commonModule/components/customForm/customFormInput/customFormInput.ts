import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "custom-form-input",
    templateUrl: "src/modules/commonModule/components/customForm/customFormInput/customFormInput.html"
})

export class CustomFormInput {
    @Input() label: string = null;
    @Input() value: string = null;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    public onValueChanged() {
        this.valueChange.emit(this.value);
    }
}