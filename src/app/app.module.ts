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






const routes :Routes=[

  {path : '',component: PrincipalComponent,canActivate:[AuthGuardService]},
  {path : '',component: HomeComponent},
  {path : 'home',component: HomeComponent},
  {path : 'prueba',component: NavBarComponent },
  {path : 'login',component: LoginComponent},
  {path : 'registro',component: RegistroComponent},
  {path : 'inicio',component: InicioComponent,canActivate:[AuthGuardService],

}

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
    NavBarComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
