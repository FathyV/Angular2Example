import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./users";
import { AddNewUser } from "./addNewUser";

let routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: 'full' },
    { path: "users", component: Users },
    { path: "addNewUser", component: AddNewUser }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoutes { }