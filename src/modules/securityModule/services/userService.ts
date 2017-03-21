
import { Injectable } from "@angular/core";
import { HttpConnector } from "commonModule/services/httpConnector";

@Injectable()

export class UserService {
    public httpConnector: HttpConnector;

    constructor(httpConnector: HttpConnector) {
        this.httpConnector = httpConnector;
    }

    public getUsers() {
        return this.httpConnector.get("src/api/users.json");
    }
}