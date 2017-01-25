import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  // Configure Auth0
   options = {
    auth: {
        responseType: 'id_token',
        params: {scope: 'openid name email'}
    }
};
  lock = new Auth0Lock(myConfig.clientID, myConfig.domain, this.options,{});

  constructor() {
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('userEmail', authResult.idTokenPayload.email);
        localStorage.setItem('userName', authResult.idTokenPayload.name);

//        this.lock.getUserInfo(authResult.idToken, function (error, profile) {
//            if (error) {
//                // Handle error
//                return;
//            }
//
//            localStorage.setItem('userToken', authResult.idToken);
//            localStorage.setItem('userEmail', authResult.idTokenPayload.email);
//            localStorage.setItem('userName'), authResult.idTokePayload.name);
//
////            goToHomepage(authResult.state, authResult.idToken);
//            return;
//        })
    });
  }

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // It searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}
