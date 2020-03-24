import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductosService } from '../productos.service';
import { Departamento } from '../departamento';
import { AuthService2 } from '../auth.service';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  

  depa:Departamento[]=[];

  constructor(public depas: ProductosService,public auth: AuthService2,public authService: AuthService){

    this.depas.getDepartamentos('/usuarios/departamentos').subscribe((res:any) =>{

      this.depa=res;

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
 this.depas.deleteDepartamento('usuarios/departamento/' + idx).subscribe((res:any)=>{
   console.log(res);
 });
 window.location.reload();
}


}
