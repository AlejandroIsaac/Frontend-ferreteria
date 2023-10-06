import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria, CategoriaDTO } from '../models/categoria.model';

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
  create(categoriaDTO: CategoriaDTO){
    return this.http.post<Categoria>(this.URL,categoriaDTO);
  }
}
