import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./users"
import { UserSummary } from "./userSummary";
import { CustomFormInput } from "./customFormInput";
import { CustomForm } from "./customForm";
import { FormButton } from "./formButton";
import { PrimaryButton } from "./primaryButton";
import { Page } from "./page";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, SecurityRoutes],
    declarations: [DefaultPage, Users, UserSummary, CustomFormInput, CustomForm, FormButton, PrimaryButton, Page],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
