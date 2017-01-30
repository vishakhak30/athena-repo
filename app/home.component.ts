import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home.template.html',
  styleUrls: ['app/home.component.css']
})

export class HomeComponent {
    userName:string;
  constructor(private auth: Auth) {
      this.userName = localStorage.getItem('userName');
      console.log(auth);
  }
//    ngAfterViewInit() {
//
//    }
}
