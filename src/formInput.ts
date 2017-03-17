import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-input",
    templateUrl: "src/formInput.html"
})

export class FormInput {
    @Input() value: string = null;
    @Input() label: string = null;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    public onValueChanged() {
        this.valueChange.emit(this.value);
    }

}