export interface Provedor {
    id: number,
    organizacion: string,
    vendedor: string,
    direccion: string
}
export interface ProvedorDTO extends Omit<Provedor, 'id'>{

}