import { Component, OnInit } from '@angular/core';
import {AuthService2, TokenPayLoad} from '../auth.service'
import {Router} from '@angular/router'
import { Token } from '@angular/compiler/src/ml_parser/lexer'
//gmail
import { SocialUser } from "angularx-social-login";
 


import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public state:string='inactive'

  credentials: TokenPayLoad={
      id:0,
      Nombre : '',
      Apellidos:'',
      email : '',
      password : '',
  }

  constructor (public auth: AuthService2,public router : Router,private authService: AuthService){}

  public user: SocialUser;
  public loggedIn: boolean;
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 
 
  signOut(): void {
    this.authService.signOut();
  }
 

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

    logini()
    {
        this.auth.loginn(this.credentials).subscribe(
            ()=>{
                this.router.navigateByUrl('/')
            },
            err =>{console.error(err)}
        )
    }

}
