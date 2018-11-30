import { Platillo } from "./platillo.model";

export class DetallePedido {
    codigo: number;
    platillo: Platillo;
    precio:number;
    cantidad:number;

    constructor() {
        
        this.platillo= new Platillo();
    }
}
