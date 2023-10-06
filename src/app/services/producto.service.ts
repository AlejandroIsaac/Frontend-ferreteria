import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, ProductoDTO } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private http:HttpClient //inyecta dependencia http
    ) { }
  getAllProducts(){
    return this.http.get<Producto[]>('http://localhost:8080/productos');
  }  

  createNewproduct(productoDTO: ProductoDTO){
    return this.http.post<Producto>('http://localhost:8080/productos', productoDTO);
  }
}
