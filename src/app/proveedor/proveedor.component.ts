import { Component, OnInit } from '@angular/core';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { ProductosService } from '../productos.service';

import{Proveedor} from '../proveedor'

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  proveedor:Proveedor[]=[]

  constructor( public pro:ProductosService,public auth: AuthService2,public authService: AuthService) { 
    this.pro. getProveedores('/usuarios/proveedores').subscribe((res:any) =>{

      this.proveedor=res;

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
   this.pro.deleteProveedor('usuarios/proveedor/' + idx).subscribe((res:any)=>{
     console.log(res);
   });
   window.location.reload();
  }


}
