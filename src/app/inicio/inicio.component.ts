import { Component, OnInit } from '@angular/core';
import {AuthenticationService, UserDetails} from '../authentification.service'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  details: UserDetails

  constructor(public auth: AuthenticationService){}
  
 

 

  ngOnInit(): void {
    const current = this.auth.getUserDetails()
        this.auth.profile(current.id).subscribe(
            user=>{
                this.details = user
            },
            err=>{
                console.error(err)
            }
        )
  }

}
