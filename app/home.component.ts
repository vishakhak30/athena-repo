import { Component } from '@angular/core';
import { Auth }      from './auth.service';

@Component({
  selector: 'home',
  templateUrl: 'app/home.template.html',
  styleUrls: ['app/home.component.css']
})

export class HomeComponent {
  constructor(private auth: Auth) {}
}
