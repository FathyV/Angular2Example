import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

@Injectable()

export class HttpConnector {
    public http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    public get(url: string) {
        return this.http.get(url)
            .map((response: Response) => { return response.json(); });
    }
}