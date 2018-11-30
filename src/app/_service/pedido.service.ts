import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../_model/pedido.model';
import { DetallePedido } from '../_model/detallePedido.model';
import { TarjetaResponse } from '../_model/tarjeta.model';

@Injectable()
export class PedidoService {

  pedido: Pedido;
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Pedido/';


  AgregarPedido(pedido: Pedido): Observable<string> {
    return this.http.post<string>(this.baseUrl + 'AgregarPedido', pedido);
  }

  ListarPedidoXEstado(estado) {
    return this.http.get<Pedido[]>(this.baseUrl+'/ListarPedidoXEstado?estado='+estado);
  }

  ListarDetallePedido(pedido) {
    return this.http.get<DetallePedido[]>(this.baseUrl+'/ListarDetallePedido?pedido='+pedido);
  }

  ActualizarEstadoPedido(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarEstadoPedido/'+id,null);
  }

  ValidarPago(tarjeta):Observable<TarjetaResponse>{
    return this.http.post<TarjetaResponse>(this.baseUrl+'ValidarPago',tarjeta);
  }

  AgregarPlatilloAPedido(detallePedido: DetallePedido): string {
    this.pedido = new Pedido();
    this.pedido.detallePedido = [];
    if (detallePedido.cantidad == null || detallePedido.cantidad <= 0) {
      return "Ingrese una cantidad valida"
    }

    if (JSON.parse(localStorage.getItem("DetallePedidoActual")) == null) {

      this.pedido.detallePedido.push(detallePedido);
      localStorage.setItem('DetallePedidoActual', JSON.stringify(this.pedido.detallePedido));
      return "Se creo el pedido";
    }
    else {
      this.pedido.detallePedido = JSON.parse(localStorage.getItem("DetallePedidoActual"));


      for (let dp of this.pedido.detallePedido) {
        if (dp.platillo.codigo == detallePedido.platillo.codigo) {
          dp.cantidad += detallePedido.cantidad;
          localStorage.removeItem('DetallePedidoActual');
          localStorage.setItem('DetallePedidoActual', JSON.stringify(this.pedido.detallePedido));
          return "se actualizo la cantidad";
        }
      }
        this.pedido.detallePedido.push(detallePedido);
        localStorage.removeItem('DetallePedidoActual');
        localStorage.setItem('DetallePedidoActual', JSON.stringify(this.pedido.detallePedido));

        return "Se agrego un nuevo platillo";
      
    }
  }

  EliminarPlatilloAPedido(detallePedido: DetallePedido): string {
    this.pedido = new Pedido();
    this.pedido.detallePedido = [];
    
      this.pedido.detallePedido = JSON.parse(localStorage.getItem("DetallePedidoActual"));
      var cont=0;
      for (let dp of this.pedido.detallePedido) {
        if (dp.platillo.codigo == detallePedido.platillo.codigo) {
          
          this.pedido.detallePedido.splice(cont,1);
          
          localStorage.removeItem('DetallePedidoActual');
          
          localStorage.setItem('DetallePedidoActual', JSON.stringify(this.pedido.detallePedido));
          cont++;
          return "se actualizo la cantidad";
        }
      }
      
      
    }
  
  LimpiarPedido(){
    localStorage.removeItem('DetallePedidoActual');
  }

  getPedido(): Pedido {
    this.pedido = new Pedido();
    this.pedido.detallePedido = [];

    if (JSON.parse(localStorage.getItem("DetallePedidoActual")) == null) {
      return this.pedido;

    }
    else {
      this.pedido.detallePedido = JSON.parse(localStorage.getItem("DetallePedidoActual"));
      return this.pedido;
    }
  }
}
