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
  }

  verDetalle(){
    console.log('Boton ver detalle: envia a padre ', this.productoHijo)
    this.verDetallePadreEvent.emit(this.productoHijo);
  }

}
