import { Usuario } from "./usuario.model";
import { DetallePedido } from "./detallePedido.model";

export class Pedido {
    codigo: number;
    usuario: Usuario;
    fecha: Date;
    estado:number;
    total:number;
    detallePedido:DetallePedido[];

    constructor() {
        this.detallePedido = new Array<DetallePedido>(); 
        
        this.usuario= new Usuario();
    }
}

