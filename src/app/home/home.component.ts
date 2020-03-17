import { Component, OnInit } from '@angular/core';
import { SocialUser } from "angularx-social-login";
import {AuthService2, TokenPayLoad} from '../auth.service'
import {Router} from '@angular/router'
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(public auth: AuthService2,public router : Router,private authService: AuthService) { }

  
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

}
