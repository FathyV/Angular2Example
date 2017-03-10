import {Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import {Users} from "./users";

let routes: Routes =[
    {path:"", redirectTo: "users", pathMatch: 'full'},
    {path:"users", component: Users},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]    
})

export class SecurityRoutes{}