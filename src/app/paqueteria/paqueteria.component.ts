import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../productos.service';

import{Paqueteria} from '../paqueteria'

import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-paqueteria',
  templateUrl: './paqueteria.component.html',
  styleUrls: ['./paqueteria.component.css']
})
export class PaqueteriaComponent implements OnInit {
  paqueteria:Paqueteria[]=[]





  constructor(public pq: ProductosService,public auth: AuthService2,public authService: AuthService) { 


  this.pq.getPaqueterias('/usuarios/paqueterias').subscribe((res:any) =>{

    this.paqueteria=res;

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
 this.pq.deletePaqueteria('usuarios/paqueteria/' + idx).subscribe((res:any)=>{
   console.log(res);
 });
 window.location.reload();
}

}
