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

  constructor(
    private productoService: ProductoService
  ){}
  ngOnInit(): void {
    this.productoService.getAllProducts().subscribe(productos=>{
      console.log(productos);
      this.productos=productos;
    });
  }
  

}
