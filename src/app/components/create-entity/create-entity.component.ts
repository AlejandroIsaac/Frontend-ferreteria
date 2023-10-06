import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Categoria, CategoriaDTO } from 'src/app/models/categoria.model';
import { Producto, ProductoDTO } from 'src/app/models/producto.model';
import { Provedor, ProvedorDTO } from 'src/app/models/provedor.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProvedorService } from 'src/app/services/provedor.service';

@Component({
  selector: 'app-create-entity',
  templateUrl: './create-entity.component.html',
  styleUrls: ['./create-entity.component.css']
})
export class CreateEntityComponent implements OnInit{
  nuevoproducto:ProductoDTO={
    codigo:'',
    descripcion:'',
    especificacion:'',
    imagen:'',
    nombre:'',
    precioCosto:0,
    precioPromocion:0,
    precioVenta:0,
    categoria:{"id": 0, "nombre": "", "descripcion": ""},
    provedor:{"id": 0, "organizacion": "", "vendedor": "", "direccion": ""},
  }
  nuevaCategoria:CategoriaDTO={
    nombre:'',
    descripcion:''
  }

  nuevoProvedor:ProvedorDTO= {
    organizacion: '',
    vendedor: '',
    direccion: ''
  }
  categorias : Categoria[]=[];
  provedores : Provedor[]=[];
  name =new FormControl('');
  
  constructor(
    private categoriaService :CategoriaService,
    private provedorService: ProvedorService,
    private productoService: ProductoService
  ){}
  ngOnInit(): void {
    this.categoriaService.getAllcategorias().subscribe(data=>{
      this.categorias = data;
      console.log('categorias', data)
    });
    this.provedorService.getAllProvedores().subscribe(data=>{
      this.provedores= data;
      console.log('provedores', data)
    })
  }
  guardarPoducto(){
    console.log(this.nuevoproducto)
    this.productoService.createNewproduct(this.nuevoproducto).subscribe(data=>{
      console.log('Producto creado', data)
      window.alert('Producto creado con exito');
      //actalizar data de mainResult
      //limpiar formulario
      this.nuevoproducto={
        codigo:'',
        descripcion:'',
        especificacion:'',
        imagen:'',
        nombre:'',
        precioCosto:0,
        precioPromocion:0,
        precioVenta:0,
        categoria:{"id": 0, "nombre": "", "descripcion": ""},
        provedor:{"id": 0, "organizacion": "", "vendedor": "", "direccion": ""},
      }
      
    })
  }
  guardarCategoria(){
    console.log('Guardar categoria');
    console.log(this.nuevaCategoria);
    this.categoriaService.create(this.nuevaCategoria).subscribe(data =>{
      console.log('Categoria creada', data);
      window.alert('Categoria creada con exito');
      //Limpiar formulario
      this.nuevaCategoria={
        nombre:'',
        descripcion:''
      }
    });
  }



  guardarProvedor(){
    console.log('Guardar provedor');
    console.log(this.nuevoProvedor);
    this.provedorService.create(this.nuevoProvedor).subscribe(data=>{
      console.log('Provedor creado', data);
      window.alert('Provedor creado con exito');

      //Actualizar data de select de formulario Productos
      //Limpiar formulario
      this.nuevoProvedor= {
        organizacion: '',
        vendedor: '',
        direccion: ''
      }
    });
  }

}
