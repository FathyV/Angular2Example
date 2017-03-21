import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "src/defaultPage";
import { SecurityRoutes } from "./securityRoutes";
import { Users } from "./components/users/users"
import { UserSummary } from "./components/userSummary/userSummary";
import { HttpModule } from "@angular/http";
import {CommonModule} from "src/modules/commonModule/commonModule";

@NgModule({
    imports: [HttpModule, BrowserModule, FormsModule, SecurityRoutes, CommonModule],
    declarations: [DefaultPage, Users, UserSummary],
    bootstrap: [DefaultPage],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SecurityModule { }
