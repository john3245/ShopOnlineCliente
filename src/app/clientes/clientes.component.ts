import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';

import { Cliente } from '../cliente';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


 

@Component({

  selector: 'app-clientes',

  templateUrl: './clientes.component.html',

  styleUrls: ['./clientes.component.css']

})

export class ClientesComponent implements OnInit {

clientes:Cliente[]=[];

  constructor(public productoss: ProductosService,public auth: AuthService2,public authService: AuthService) {

    this.productoss.getCliente('/usuarios/clientes').subscribe((res:any) =>{

      this.clientes=res;

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
  this.productoss.deleteCliente('usuarios/cliente/' + idx).subscribe((res:any)=>{
    console.log(res);
  });
  window.location.reload();
 }



}