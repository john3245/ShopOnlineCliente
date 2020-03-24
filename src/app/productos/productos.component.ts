import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';

import { Producto } from '../producto';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";




 

@Component({

  selector: 'app-productos',

  templateUrl: './productos.component.html',

  styleUrls: ['./productos.component.css']

})

export class ProductosComponent implements OnInit {

  productos:Producto[]=[];
  

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService){

    this.productoss.getProductos('/usuarios/productos').subscribe((res:any) =>{

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

  Borrar(idx:number)
 {
   console.log(idx);
  this.productoss.deleteProducto('usuarios/producto/' + idx).subscribe((res:any)=>{
    console.log(res);
  });
  window.location.reload();
 }





}