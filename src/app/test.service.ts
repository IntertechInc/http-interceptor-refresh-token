import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TestService {
    constructor(private http: HttpClient) { }

    getData() {
        return this.http.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getDataError401');
    }

    getLookup() {
        return this.http.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getLookupError401');
    }
}