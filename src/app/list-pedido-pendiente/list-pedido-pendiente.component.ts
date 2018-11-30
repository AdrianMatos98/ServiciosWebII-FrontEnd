import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PedidoService } from '../_service/pedido.service';
import { Pedido } from '../_model/pedido.model';
import { diPublic } from '@angular/core/src/render3/di';

@Component({
  selector: 'app-list-pedido-pendiente',
  templateUrl: './list-pedido-pendiente.component.html',
  styleUrls: ['./list-pedido-pendiente.component.css']
})
export class ListPedidoPendienteComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.refreshIntervalId);
  }

  pedidos: Pedido[];
  refreshIntervalId;

  constructor(private router: Router, private pedidoService: PedidoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.ListarPedidoPendiente();
    this.refreshIntervalId = setInterval(() => {this.ListarPedidoPendiente();}, 5000);
    
  }

  ListarPedidoPendiente() {
    console.log(1)
    this.pedidoService.ListarPedidoXEstado(0)
      .subscribe(data => {
        this.pedidos = data;
        if(this.pedidos!=null){
          for(let p of this.pedidos){
            this.pedidoService.ListarDetallePedido(p.codigo)
            .subscribe(data => {
              p.detallePedido=data;
            });
          }
        }
      });
  }

  ActualizarEstado(id){
    this.pedidoService.ActualizarEstadoPedido(id)
          .subscribe(data => {
            if(data!="Pedido actualizado"){
              this.toastr.error(data);
            }
            else{
              this.ListarPedidoPendiente();
              this.toastr.success(data);
            }
          });
  }
  
}
