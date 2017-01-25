import { Component }  from '@angular/core';
import { Auth }       from './auth.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home.component.html'
})

export class HomeComponent {
    userName: string;
  constructor(private auth: Auth) {
      setTimeout(() => {
          //this.userName = localStorage.userName;
          console.log(localStorage);
      }, 2000);
  }
  options = [];

};
