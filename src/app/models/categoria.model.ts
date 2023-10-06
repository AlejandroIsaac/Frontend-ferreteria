export interface Categoria{
    id:number;
    descripcion:string;
    nombre:string;
} 
export interface CategoriaDTO extends Omit<Categoria,'id'>{

}