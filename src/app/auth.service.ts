import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

export class AuthService {
    // Assuming this would be cached somehow from a login call.
    public authTokenStale: string = 'stale_auth_token';
    public authTokenNew: string = 'new_auth_token';
    public currentToken: string;

    constructor() {
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

        return Observable.of(this.authTokenNew).delay(200);
    }
}