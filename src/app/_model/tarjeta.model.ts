export class Tarjeta {
    numeroTarjeta: string;
    titularTarjeta: string;
    tarjetaHabilitada: boolean;
    creditoDisponible:number;
}

export class TarjetaResponse {
    TransaccionCompleta: boolean;
    TransaccionMensaje: string
}