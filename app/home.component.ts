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
      console.log(auth);
  }
    ngAfterViewInit() {
        this.userName = localStorage.getItem('userName');
    }
}
