import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpConnector } from "./services/httpConnector";
import { CustomForm } from "./components/customForm/customForm";
import { Page } from "./components/page/page";
import { CustomFormInput } from "./components/customForm/customFormInput/customFormInput";
import { FormButton } from "./components/customForm/formButton/formButton";
import { PrimaryButton } from "./components/customForm/primaryButton/primaryButton";

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule],
    declarations: [CustomForm, CustomFormInput, FormButton, PrimaryButton, Page],
    providers: [HttpConnector],
    exports: [CustomForm, CustomFormInput, FormButton, PrimaryButton, Page]
})

export class CommonModule { }