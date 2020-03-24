import { Component, OnInit } from '@angular/core';

import { ProductosService, MiProducto, MiDepartamento } from '../productos.service';

import { Departamento } from '../departamento';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

 

@Component({

  selector: 'app-insertdepartamento',

  templateUrl: './insertdepartamento.component.html',

  styleUrls: ['./insertdepartamento.component.css']

})

export class InsertdepartamentoComponent implements OnInit {

  departamentos:Departamento[]=[]

  elements:MiDepartamento={

    nombre:''

  }

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService) {

 

  }

 

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    

  }

 

  postDepartamento(){

    this.productoss.setDepartamentos('/usuarios/departamento',this.elements).subscribe((res:any)=>{

      console.log(res);

      window.alert("Departamento registrado");

    })

  }

 

}