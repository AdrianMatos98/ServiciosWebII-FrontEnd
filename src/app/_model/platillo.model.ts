import { Categoria } from "./categoria.model";

export class Platillo {
    codigo: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado:number;
    categoria:Categoria;
    imagen:string;
}