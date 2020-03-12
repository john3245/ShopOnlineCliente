import { Component, OnInit } from '@angular/core';
import {AuthService, TokenPayLoad} from '../auth.service'
import {Router} from '@angular/router'
import { Token } from '@angular/compiler/src/ml_parser/lexer'

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

  constructor (public auth: AuthService,public router : Router){}

    ngOnInit(){
        
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
