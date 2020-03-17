import {Injectable} from '@angular/core'
import {Router,CanActivate} from '@angular/router'
import {AuthenticationService} from './authentification.service'
import {AuthService2} from './auth.service'
@Injectable()
export class AuthGuardService implements CanActivate
{
    constructor(private auth: AuthService2, private router:Router){}

    canActivate()
    {
        if(!this.auth.isLoggedIn())
        {
            this.router.navigateByUrl('/')
            return false 
        }

        return true
        
    }
    
}

