import { Component, Input } from '@angular/core';
import { Producto } from '../../models/producto.model'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  @Input() productoHijo:Producto={
    id:1,
    title:'pala',
    price: 60,
    description:'para la contruccion',
    category:'construccion',
    image:'oiuytrrewjhvc'
  }

}
