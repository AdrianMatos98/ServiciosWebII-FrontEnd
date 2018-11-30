import { Tipo } from "./tipo.model";

export class Usuario {
    codigo: number;
    nombre: string;
    password: string;
    estado:number;
    tipo:Tipo;
}