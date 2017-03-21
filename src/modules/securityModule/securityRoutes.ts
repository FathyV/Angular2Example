import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./components/users/users";
import { UserService } from "./services/userService";
import { HttpConnector } from "commonModule/services/httpConnector";

let routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: 'full' },
    { path: "users", component: Users },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [UserService, HttpConnector]
})

export class SecurityRoutes { }