import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  categorias: Categoria []=[];
    


  constructor(
    private categoriaService: CategoriaService
  ){}
  ngOnInit(): void {
    this.categorias= [
      {id:1, nombre:"alex", descripcion:"algo"},
      {id:2, nombre:"Mario", descripcion:"algo"}
      ];
    this.categoriaService.getAllcategorias().subscribe(categorias => {
      //console.log(categorias)
      this.categorias= categorias;
      //console.log(this.categorias)
    });
  }

}
