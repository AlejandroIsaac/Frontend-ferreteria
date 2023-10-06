import { Categoria } from "./categoria.model";
import { Provedor } from "./provedor.model";

export interface Producto {
    id:number;
    codigo:string;
    descripcion:string;
    especificacion:string;
    imagen:string;
    nombre:string;
    precioCosto:number;
    precioPromocion:number;
    precioVenta:number;
    categoria:number;
    provedor:number;
}

export interface ProductoDTO {
    codigo:string;
    descripcion:string;
    especificacion:string;
    imagen:string;
    nombre:string;
    precioCosto:number;
    precioPromocion:number;
    precioVenta:number;
    categoria:Categoria;
    provedor:Provedor;
}