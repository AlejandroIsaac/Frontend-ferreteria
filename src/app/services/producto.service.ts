import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  URL='https://fakestoreapi.com/products';

  constructor(
    private http:HttpClient //inyecta dependencia http
    ) { }
  getAllProducts(){
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
  }  
}
