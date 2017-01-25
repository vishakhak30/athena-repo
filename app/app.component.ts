import { Component, OnInit } from '@angular/core';
import { Auth } from './auth.service';

@Component({
    selector: 'my-app',
    providers: [Auth],
    templateUrl: 'app/app.template.html'
})

export class AppComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private auth: Auth) { }

    /**
     * Checks the login status and if not logged in dispaly login pop up
     */
    checkLogin() {
        let auth = this.auth;
        setTimeout(() => {
            this.isLoggedIn = auth.authenticated();
            !this.isLoggedIn && auth.login();
        }, 2000);
    }

    ngOnInit() {
        this.checkLogin();
    }
};
