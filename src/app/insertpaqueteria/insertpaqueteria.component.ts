import { Component, OnInit } from '@angular/core';

import { ProductosService, MiPaqueteria } from '../productos.service';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
 

@Component({

  selector: 'app-insertpaqueteria',

  templateUrl: './insertpaqueteria.component.html',

  styleUrls: ['./insertpaqueteria.component.css']

})

export class InsertpaqueteriaComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;
  elements:MiPaqueteria={

    nombre:'',

    email:'',

    telefono:''

  }

 

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService) { }

 

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

 

  postPaqueteria(){

    this.productoss.setPaqueterias('/usuarios/paqueteria',this.elements).subscribe((res:any)=>{

      console.log(res);

      window.alert("Paqueteria registrada");

    })

  }

 

}

 

 


