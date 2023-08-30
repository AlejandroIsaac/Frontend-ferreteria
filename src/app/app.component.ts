import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 //tipos de variables
  nombre: String ="";
  edad:Number=0;
  casado:Boolean=true;
  ocupacion: any="";
  propiedades: Array<String>=[];
  amigos: Array<any>=[];

//Se ejecuta cuando nace el componente
  ngOnInit(): void {
    this.nombre="Alejandro";
    this.edad=30.5;
    this.casado=true;
    this.ocupacion="Programador";
    this.propiedades=['Casa', 'carro'];
    this.amigos=[{nombre:"victor", edad:36},{nombre:"edgar", edad:34},{nombre:"dante", edad:35}];
  }
}
