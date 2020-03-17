import { Component } from '@angular/core';
import {AuthenticationService} from './authentification.service'
import { AuthService2 } from './auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShopOnline';

  signOut(): void {
    this.authService.signOut();
  }

public user: SocialUser;
public loggedIn: boolean;
  //constructor(public auth: AuthenticationService){}
  constructor(public auth: AuthService2,public authService: AuthService ) { }
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }





}



