import { Component } from '@angular/core';
import {AuthenticationService} from './authentification.service'
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopOnline';
  //constructor(public auth: AuthenticationService){}
  constructor(public auth: AuthService ) { }





}



