import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto.model'
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Output() verDetallePadreEvent= new EventEmitter<Producto>;

  @Input() productoHijo:Producto={
    id:0,
    codigo:0,
    descripcion:"",
    especificacion:"",
    imagen:"",
    nombre:"",
    precio_costo:0,
    precio_promocion:0,
    precioVenta:0,
    categoria_id:0,
    provedor_id:0
  }

  verDetalle(){
    console.log('Boton ver detalle: envia a padre ', this.productoHijo)
    this.verDetallePadreEvent.emit(this.productoHijo);
  }

}
