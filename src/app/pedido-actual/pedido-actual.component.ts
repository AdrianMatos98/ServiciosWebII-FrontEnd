import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../_service/pedido.service';
import { Pedido } from '../_model/pedido.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DetallePedido } from '../_model/detallePedido.model';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioService } from '../_service/usuario.service';
import { Tarjeta, TarjetaResponse } from '../_model/tarjeta.model';

@Component({
  selector: 'app-pedido-actual',
  templateUrl: './pedido-actual.component.html',
  styleUrls: ['./pedido-actual.component.css']
})
export class PedidoActualComponent implements OnInit {

  pedido: Pedido;

  tarjetaResponse: TarjetaResponse;

  RealizarPedidoForm = new FormGroup({
    NumeroTarjeta: new FormControl(''),
    TipoTarjeta: new FormControl(0),
    CodigoSeguridadTarjeta: new FormControl(''),
    TitularTarjeta: new FormControl(''),
    MesExpiracionTarjeta: new FormControl(''),
    AñoExpiracionTarjeta: new FormControl(''),
    MontoConsumir: new FormControl(0)
  });


  constructor(private router: Router, private pedidoService: PedidoService, private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit() {
    this.pedido = this.pedidoService.getPedido();
    console.log(this.pedido);
    this.SetearDatosPedido();

  }

  SetearDatosPedido(): void {
    this.pedido.total = 0;
    this.pedido.usuario = this.usuarioService.getUsuarioLogueado();
    for (let x of this.pedido.detallePedido) {

      x.precio = x.platillo.precio;
      this.pedido.total += (x.cantidad * x.platillo.precio);

    }
    console.log(this.pedido);
  }


  EliminarPlatilloAPedido(detallePedido: DetallePedido) {
    this.pedidoService.EliminarPlatilloAPedido(detallePedido);
    this.pedido = this.pedidoService.getPedido();
  }

  RealizarPedido() {
    this.RealizarPedidoForm.get('MontoConsumir').setValue(this.pedido.total);
    this.pedidoService.ValidarPago(this.RealizarPedidoForm.value)
      .subscribe(data => {
        this.tarjetaResponse = data;
        if (data.TransaccionCompleta) {
          this.pedidoService.AgregarPedido(this.pedido)
            .subscribe(data => {
              if (data != "Pedido agregado") {
                this.toastr.error(data);
              }
              else {
                this.router.navigate(['home']);
                this.toastr.success(data);
                this.pedidoService.LimpiarPedido();
              }

            });
        }
        else{
          this.toastr.error(data.TransaccionMensaje);
        }
      });

  }
}
