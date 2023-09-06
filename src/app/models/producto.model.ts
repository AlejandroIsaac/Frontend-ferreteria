export interface Producto {
    id:number;
    codigo:number;
    descripcion:string;
    especificacion:string;
    imagen:string;
    nombre:string;
    precio_costo:number;
    precio_promocion:number;
    precioVenta:number;
    categoria_id:number;
    provedor_id:number;
}