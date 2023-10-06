import { Component , OnInit} from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';
@Component({
  selector: 'app-main-result',
  templateUrl: './main-result.component.html',
  styleUrls: ['./main-result.component.css']
})
export class MainResultComponent implements OnInit{
  productos:Producto[]=[];
  showBar=false;
  productoSeleccionado:Producto={
    id:0,
    codigo:"",
    descripcion:"",
    especificacion:"",
    imagen:"",
    nombre:"",
    precioCosto:0,
    precioPromocion:0,
    precioVenta:0,
    categoria:0,
    provedor:0
  };

  constructor(
    private productoService: ProductoService
  ){}
  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(productos=>{
      //console.log(productos);
      this.productos=productos;
    });
  }
  cerrarBarra(){
    this.showBar= !this.showBar;
  }

  verDetalle(productoSelecionado: Producto){
    this.showBar= !this.showBar;
    console.log('soy padre, recibo', productoSelecionado)
    this.productoSeleccionado=productoSelecionado;
  }
  

}
