import { Component, OnInit } from '@angular/core';

import { ProductosService, Miventa } from '../productos.service';

import {Cliente} from '../cliente';

import {Paqueteria} from '../paqueteria';

import {Producto} from '../producto';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

 

@Component({

  selector: 'app-insert-venta',

  templateUrl: './insert-venta.component.html',

  styleUrls: ['./insert-venta.component.css']

})

export class InsertVentaComponent implements OnInit {

  clientes:Cliente[]=[];

  paqueterias:Paqueteria[]=[];

  productos:Producto[]=[];

  elements:Miventa={

    id_cli:0,

    id_pro:0,

    cantidad_pro:0,

    id_paq:0,

    fecha:''

  }

 

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService) {

    this.productoss.getCliente('usuarios/clientes').subscribe((res:any)=>{

      this.clientes=res;

 

    });

 

    this.productoss.getPaqueterias('usuarios/paqueterias').subscribe((res:any)=>{

      this.paqueterias=res;

 

    });

 

    this.productoss.getProductos('usuarios/productos').subscribe((res:any)=>{

      this.productos=res;

 

    });

   }

 
   public user: SocialUser;
   public loggedIn: boolean;
   ngOnInit(): void {
 
     this.authService.authState.subscribe((user) => {
       this.user = user;
       this.loggedIn = (user != null);
     });
 
   }
 

  postVenta()

  {

    this.productoss.setVenta('usuarios/detalle_venta',this.elements).subscribe((res:any)=>{

      console.log(res);

      window.alert("Venta realizada");

    });

  }

 

}

 