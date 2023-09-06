import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  URL="http://localhost:8080/categorias";
  constructor(
    private http: HttpClient
  ) { }
  getAllcategorias(){
    return this.http.get<Categoria[]>("http://localhost:8080/categorias");
  }
}
