import { Injectable } from '@angular/core';
import createAuth0Client from '@auth0/auth0-spa-js';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import { from, of, Observable, BehaviorSubject, combineLatest, throwError } from 'rxjs';
import { tap, catchError, concatMap, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

import {HttpClient} from '@angular/common/http'

import {map} from 'rxjs/operators'
import { Local } from 'protractor/built/driverProviders'
import { JsonPipe } from '@angular/common'
import { request } from 'http'


export interface UserDetails{

  id:number
  nombre : string
  apellidos : string
  email : string
  password : string
  exp :number
  iat:number
  uid:number
}


interface TokenResponse{

  token:string
}

export interface TokenPayLoad
{

  id:number
  Nombre : string 
  Apellidos : string
  email : string
  password : string 
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token : string 
  // Create an observable of Auth0 instance of client
  auth0Client$ = (from(
    createAuth0Client({
      domain: "dev-nhudyxdy.auth0.com",
      client_id: "7CiDNiO4Bf0l50QSc2uQ9yfl5zJvZPmQ",
      redirect_uri: `${window.location.origin}`
    })
  ) as Observable<Auth0Client>).pipe(
    shareReplay(1), // Every subscription receives the same shared value
    catchError(err => throwError(err))
  );
  // Define observables for SDK methods that return promises by default
  // For each Auth0 SDK method, first ensure the client instance is ready
  // concatMap: Using the client instance, call SDK method; SDK returns a promise
  // from: Convert that resulting promise into an observable
  isAuthenticated$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.isAuthenticated())),
    tap(res => this.loggedIn = res)
  );
  handleRedirectCallback$ = this.auth0Client$.pipe(
    concatMap((client: Auth0Client) => from(client.handleRedirectCallback()))
  );
  // Create subject and public observable of user profile data
  private userProfileSubject$ = new BehaviorSubject<any>(null);
  userProfile$ = this.userProfileSubject$.asObservable();
  // Create a local property for login status
  loggedIn: boolean = null;

  constructor(private router: Router,private http: HttpClient) {
    // On initial load, check authentication state with authorization server
    // Set up local auth streams if user is already authenticated
    this.localAuthSetup();
    // Handle redirect from Auth0 login
    this.handleAuthCallback();
  }

  // When calling, options can be passed if desired
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
  getUser$(options?): Observable<any> {
    return this.auth0Client$.pipe(
      concatMap((client: Auth0Client) => from(client.getUser(options))),
      tap(user => this.userProfileSubject$.next(user))
    );
  }

  private localAuthSetup() {
    // This should only be called on app initialization
    // Set up local authentication streams
    const checkAuth$ = this.isAuthenticated$.pipe(
      concatMap((loggedIn: boolean) => {
        if (loggedIn) {
          // If authenticated, get user and set in app
          // NOTE: you could pass options here if needed
          return this.getUser$();
        }
        // If not authenticated, return stream that emits 'false'
        return of(loggedIn);
      })
    );
    checkAuth$.subscribe();
  }

  login(redirectPath: string = '/') {
    // A desired redirect path can be passed to login method
    // (e.g., from a route guard)
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log in
      client.loginWithRedirect({
        redirect_uri: `${window.location.origin}`,
        appState: { target: redirectPath }
      });
    });
  }

  private handleAuthCallback() {
    // Call when app reloads after user logs in with Auth0
    const params = window.location.search;
    if (params.includes('code=') && params.includes('state=')) {
      let targetRoute: string; // Path to redirect to after login processsed
      const authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        tap(cbRes => {
          // Get and set target redirect route from callback results
          targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }),
        concatMap(() => {
          // Redirect callback complete; get user and login status
          return combineLatest([
            this.getUser$(),
            this.isAuthenticated$
          ]);
        })
      );
      // Subscribe to authentication completion observable
      // Response will be an array of user and login status
      authComplete$.subscribe(([user, loggedIn]) => {
        // Redirect to target route after callback processing
        this.router.navigate([targetRoute]);
      });
    }
  }

  logout() {
    // Ensure Auth0 client instance exists
    this.auth0Client$.subscribe((client: Auth0Client) => {
      // Call method to log out
      client.logout({
        client_id: "7CiDNiO4Bf0l50QSc2uQ9yfl5zJvZPmQ",
        returnTo: `${window.location.origin}`
      });
    });
  }

////////////////////////////////////////////////////////////////////
  private saveToken(token:string):void {

    localStorage.setItem('usertoken',token)
    this.token=token
    
}

private getToken():string {
    if(!this.token)
    {this.token=localStorage.getItem('usertoken')}
    return this.token
}

public getUserDetails():UserDetails{
    const token =this.getToken()
    let payload 
    if(token){
        payload=token.split('.')[1]
        payload=window.atob(payload)

        return JSON.parse(payload)
    }else {
        return null 
    }
} 


public isLoggedIn():boolean{
    const user=this.getUserDetails()

    if(user)
    {
        return true
    }else {
        return false
    }
}

public isLoggedInadmin():boolean{
    const user=this.getUserDetails()

    if(user.id==1)
    {
        return true
    }else {
        return false
    }
}

public register(user :TokenPayLoad ):Observable<any>{
    return this.http.post('/usuarios/registro',user)
}

public loginn(user: TokenPayLoad): Observable<any>{
    const base = this.http.post('/usuarios/login',user)

    const request=base.pipe(
        map((data:  TokenResponse)=>{
           if(data.token){
            this.saveToken(data.token)
           }

           return data
        

    })
    )
return request

}

///////////////////////////////////////////
public profile(id):Observable<any>{
return this.http.get('usuarios/mostrar/${id}')
}

public logoutt():void

{
this.token=''
window.localStorage.removeItem('usertoken')
this.router.navigateByUrl('/home')
}

}