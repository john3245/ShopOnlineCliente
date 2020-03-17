import { Component, OnInit } from '@angular/core';
import {AuthService2, TokenPayLoad} from '../../auth.service'

import {Router} from '@angular/router'
import { Token } from '@angular/compiler/src/ml_parser/lexer'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public state:string='inactive'
  credentials: TokenPayLoad={
      id:0,
      Nombre : '',
      Apellidos:'',
      email : '',
      password : '',
  }
  constructor (private auth: AuthService2,private router : Router){}
  ngOnInit(){
      
  }

  register()
  {
      this.auth.register(this.credentials).subscribe(
          ()=>{
              this.router.navigateByUrl('/login')
          },
          err =>{console.error(err)}
      )
  }

}
