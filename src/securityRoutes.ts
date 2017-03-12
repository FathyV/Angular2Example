import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Users } from "./users";
import { UserService } from "./userService";

let routes: Routes = [
    { path: "", redirectTo: "users", pathMatch: 'full' },
    { path: "users", component: Users },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [UserService]
})

export class SecurityRoutes { }