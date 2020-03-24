import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentification.service';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AuthGuard } from './auth.guard';
//gmail

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductosComponent } from './productos/productos.component';
import { InsertproductoComponent } from './insertproducto/insertproducto.component';
import { DepartamentosComponent } from './departamentos/departamentos.component';
import { InsertdepartamentoComponent } from './insertdepartamento/insertdepartamento.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { InsertproveedorComponent } from './insertproveedor/insertproveedor.component';
import { InsertpaqueteriaComponent } from './insertpaqueteria/insertpaqueteria.component';
import { InsertVentaComponent } from './insert-venta/insert-venta.component';
import { VentasComponent } from './ventas/ventas.component';
import { PaqueteriaComponent } from './paqueteria/paqueteria.component';
import { ClientesComponent } from './clientes/clientes.component';
import { InsertclienteComponent } from './insertcliente/insertcliente.component';
  
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("174900287226-fi4ps93mkotmahccdmq3p8b4gdmo6i5f.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("502016127153720")
  }
]);

export function provideConfig() {
  return config;
}





const routes :Routes=[

 
  {path : '',component: HomeComponent},
  {path : 'home',component: HomeComponent},
  {path : 'prueba',component: NavBarComponent },
  {path : 'login',component: LoginComponent},
  {path : 'registro',component: RegistroComponent},
  {path : 'profile',component: ProfileComponent},
  {path : 'altaclientes',component: InsertclienteComponent},
  {path : 'clientes',component: ClientesComponent},
  {path : 'altaventa',component: InsertVentaComponent},
  {path : 'paqueteria',component: PaqueteriaComponent},
  {path : 'altapaqueteria',component: InsertpaqueteriaComponent},
  {path : 'altaproveedor',component: InsertproveedorComponent},
  {path : 'proveedor',component: ProveedorComponent},
  {path : 'altadepartamentos',component: InsertdepartamentoComponent},
  {path : 'ventas',component: VentasComponent},
  {path : 'departamentos',component: DepartamentosComponent},
  {path : 'productos',component: ProductosComponent},
  {path : 'altaproductos',component: InsertproductoComponent},
  {path : 'inicio',component: InicioComponent,canActivate:[AuthGuardService],},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' }

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    InicioComponent,
    PrincipalComponent,
    DashboardComponent,
    NavBarComponent,
    ProfileComponent,
    PageNotFoundComponent,
    ProductosComponent,
    InsertproductoComponent,
    DepartamentosComponent,
    InsertdepartamentoComponent,
    ProveedorComponent,
    InsertproveedorComponent,
    InsertpaqueteriaComponent,
    InsertVentaComponent,
    VentasComponent,
    PaqueteriaComponent,
    ClientesComponent,
    InsertclienteComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService,AuthGuardService,{
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
