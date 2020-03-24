import { Component, OnInit } from '@angular/core';

import { ProductosService, MiProveedor } from '../productos.service';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-insertproveedor',
  templateUrl: './insertproveedor.component.html',
  styleUrls: ['./insertproveedor.component.css']
})
export class InsertproveedorComponent implements OnInit {

  elements:MiProveedor={

    nombre:'',
    direccion:'',
    telefono:'',
    email:''

  }

  public user: SocialUser;
  public loggedIn: boolean;
  constructor(public pro: ProductosService,public auth: AuthService2,public authService: AuthService) { }

  ngOnInit(): void {

    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
  }

  postProveedor(){

    this.pro.setProveedores('/usuarios/proveedor',this.elements).subscribe((res:any)=>{

      console.log(res);


      window.alert("Proveedor insertado");

    })

  }

}
