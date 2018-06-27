import { HttpClient } from '@angular/common/http';
import {of as observableOf,  Observable } from 'rxjs';
import {delay} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    // Assuming this would be cached somehow from a login call.
    public authTokenStale: string = 'stale_auth_token';
    public authTokenNew: string = 'new_auth_token';
    public currentToken: string;

    constructor(private http: HttpClient) {
        this.currentToken = this.authTokenStale;
    }

    getAuthToken() {
        return this.currentToken;
    }

    refreshToken(): Observable<string> {
        /*
            The call that goes in here will use the existing refresh token to call
            a method on the oAuth server (usually called refreshToken) to get a new
            authorization token for the API calls.
        */

        this.currentToken = this.authTokenNew;

        // Just to keep HttpClient from getting tree shaken.
        this.http.get('http://private-4002d-testerrorresponses.apiary-mock.com/getData');

        return observableOf(this.authTokenNew).pipe(delay(200));
    }
}