import { Component, OnInit } from '@angular/core';

import { ProductosService, MiCliente } from '../productos.service';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

 

@Component({

  selector: 'app-insertcliente',

  templateUrl: './insertcliente.component.html',

  styleUrls: ['./insertcliente.component.css']

})

export class InsertclienteComponent implements OnInit {

  elements:MiCliente={

    nombre:'',

    apellidos:'',

    email:''

  }

 
  public user: SocialUser;
  public loggedIn: boolean;

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService) { }

 

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

 

  postCliente(){

    this.productoss.setCliente('/usuarios/cliente',this.elements).subscribe((res:any)=>{

      console.log(res);

      window.alert("Se ha creado el cliente correctamente");

    });

  }

 

}