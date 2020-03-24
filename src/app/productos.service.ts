import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import {Observable,of} from 'rxjs';

 

export interface MiProducto

{

  nombre:string,

  precio_unitario:number,

  id_dep:number,
  id_prov:number,
  imagen:string

}

export interface MiCliente

{

  nombre:string,

  apellidos:string,

  email:string

}

 
 

export interface Miventa{


  id_cli:number,

  id_pro:number,

  cantidad_pro:number,

  id_paq:number,
  fecha:string

}
export interface Miventa{

  id_cli:number,

  id_pro:number,

  cantidad_pro:number,

  id_paq:number,

  fecha:string

}
export interface MiPaqueteria{

  nombre:string,

  email:string,

  telefono:string

}



export interface MiDepartamento{

  
  nombre:string

}

export interface MiProveedor{

  
  nombre:string,
  direccion:string,
  telefono:string,
  email:string

}

 

@Injectable({

  providedIn: 'root'

})

export class ProductosService {

 

  constructor(private http: HttpClient) { }

 

  getProductos(url: string){

    return this.http.get(url);

 

  }

 

  getCliente(url: string){

    return this.http.get(url);

  }

 

  setVenta(url: string,venta:Miventa):Observable<any>

  {

    return this.http.post(url, venta);

  }
  getVenta(url:string){

    return this.http.get(url);

  }

 

  setProductos(url: string,prod:MiProducto):Observable<any>

  {

    return this.http.post(url, prod);

  }

 

  getDepartamentos(url:string){

    return this.http.get(url);

  }

  setDepartamentos(url:string,dep:MiDepartamento):Observable<any>
  
  {
    return this.http.post(url,dep);
  }

  getProveedores(url:string)
  {
    return this.http.get(url);
  }


  
  setProveedores(url: string,prov:MiProveedor):Observable<any>

  {

    return this.http.post(url, prov);

  }


  setPaqueterias(url:string, paq:MiPaqueteria):Observable<any>

  {

    return this.http.post(url, paq);

  }

  getPaqueterias(url:string)

  {

    return this.http.get(url);

  }

  setCliente(url:string, cli:MiCliente):Observable<any>

  {

    return this.http.post(url, cli);

  }

  deleteCliente(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }


  deleteVenta(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }

  deleteDepartamento(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }

  deleteProveedor(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }

  deletePaqueteria(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }

  deleteProducto(url: string ) : Observable<any>
  {
    return this.http.delete(url);
  }

  

}