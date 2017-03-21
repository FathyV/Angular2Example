import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

@Injectable()

export class UserService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getUsers(){
        return this.http.get("src/api/users.json")
            .map((response: Response) => { return response.json(); });
    }
}