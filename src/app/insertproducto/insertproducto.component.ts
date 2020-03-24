import { Component, OnInit } from '@angular/core';

import { ProductosService, MiProducto } from '../productos.service';

import { Departamento } from '../departamento';
import { Proveedor } from '../proveedor';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

 

@Component({

  selector: 'app-insertproducto',

  templateUrl: './insertproducto.component.html',

  styleUrls: ['./insertproducto.component.css']

})

export class InsertproductoComponent implements OnInit {

  departamentos:Departamento[]=[];

  proveedor:Proveedor[]=[]

  elements:MiProducto={

    nombre:'',
    precio_unitario:0,
    id_dep:0,
    id_prov:0,
    imagen:''

  }

  public user: SocialUser;
  public loggedIn: boolean;

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService){

    this.productoss.getDepartamentos('/usuarios/departamentos').subscribe((res:any) =>{

      this.departamentos=res;

    });

    this.productoss.getProveedores('/usuarios/proveedores').subscribe((res:any) =>{

      this.proveedor=res;

    });

  }




  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

  }

 

  postProducto(){

    this.productoss.setProductos('/usuarios/producto',this.elements).subscribe((res:any)=>{

      console.log(res);


      window.alert("Producto insertado");
      window.location.reload();

    })

  }

 

}