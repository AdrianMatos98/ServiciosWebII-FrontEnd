import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pedido } from '../_model/pedido.model';
import { Router } from '@angular/router';
import { PedidoService } from '../_service/pedido.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-pedido-completo',
  templateUrl: './list-pedido-completo.component.html',
  styleUrls: ['./list-pedido-completo.component.css']
})
export class ListPedidoCompletoComponent implements OnInit,OnDestroy {
  ngOnDestroy(): void {
    clearInterval(this.refreshIntervalId);
  }

  pedidos: Pedido[];
  refreshIntervalId ;

  constructor(private router: Router, private pedidoService: PedidoService, private toastr: ToastrService) { }

  ngOnInit() {

    this.ListarPedidoCompleto();
    this.refreshIntervalId = setInterval(() => {this.ListarPedidoCompleto();}, 5000);
  }


  ListarPedidoCompleto() {
    console.log(1)
    this.pedidoService.ListarPedidoXEstado(1)
      .subscribe(data => {
        this.pedidos = data;
        if (this.pedidos != null) {
          if(this.pedidos.length >=7){
            this.pedidos.splice(0,1)
          }
          for (let p of this.pedidos) {
            this.pedidoService.ListarDetallePedido(p.codigo)
              .subscribe(data => {
                p.detallePedido = data;
              });
          }
        }
      });
  }
}
