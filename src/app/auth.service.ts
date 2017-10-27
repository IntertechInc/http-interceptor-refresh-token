import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class AuthService {
    // Assuming this would be cached somehow from a login call.
    private authToken: string = 'xcnvoiuwernxnlks9872349';
    private refreshTokenValue: string = 'lasdlkfjaslf9845039043';

    getAuthToken() {
        return this.authToken;
    }

    refreshToken() {
        return Observable.of(this.refreshTokenValue);
    }
}