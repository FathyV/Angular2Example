import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./users"
import { UserSummary } from "./userSummary";
import { FormHorizontal } from "./formHorizontal";
import { FormInput } from "./formInput";
import { FormButtonPrimary } from "./formButtonPrimary";
import { FormButton } from "./formButton";
import { Page } from "./page";
import { HttpConnector } from "./httpConnector";
import { UserService } from "./userService";
import { RouterModule } from "@angular/router";
import { AddNewUser } from "./addNewUser";
@NgModule({
    imports: [RouterModule, HttpModule, BrowserModule, FormsModule, SecurityRoutes],
    declarations: [DefaultPage, Users, UserSummary, FormHorizontal, FormInput, FormButtonPrimary, FormButton, Page, AddNewUser],
    bootstrap: [DefaultPage],
    providers: [HttpConnector, UserService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
