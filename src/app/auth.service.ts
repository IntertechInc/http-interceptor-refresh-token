import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

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

    refreshToken() {
        this.currentToken = this.authTokenNew;

        return Observable.of(this.authTokenNew);
    }
}