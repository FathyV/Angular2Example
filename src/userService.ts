import { HttpConnector } from "./httpConnector";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
    private iConnector: HttpConnector;
    constructor(iConnector: HttpConnector) {
        this.iConnector = iConnector;
    }
    public getUsers(): any {
        return this.iConnector.get("src/api/users.json");
    }
}