import { Component }         from '@angular/core';
import { Auth }              from './auth.service';
import { HomeComponent }   from './home.component';

@Component({
    selector: 'my-app',
    providers: [ Auth ],
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}
};
