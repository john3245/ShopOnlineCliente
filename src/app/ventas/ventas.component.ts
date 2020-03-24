import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

import { Ventas } from '../ventas';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  venta:Ventas[]=[];

  constructor(public sell: ProductosService,public auth: AuthService2,public authService: AuthService) {

    this.sell.getVenta('/usuarios/consulta').subscribe((res:any) =>{

      this.venta=res;

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
  this.sell.deleteVenta('usuarios/detalle_venta/' + idx).subscribe((res:any)=>{
    console.log(res);
  });
  window.location.reload();
 }


}
