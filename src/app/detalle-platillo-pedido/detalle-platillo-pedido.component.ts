import { Component, OnInit } from '@angular/core';
import { Platillo } from '../_model/platillo.model';
import { Categoria } from '../_model/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { PlatilloService } from '../_service/platillo.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { Pedido } from '../_model/pedido.model';
import { PedidoService } from '../_service/pedido.service';
import { DetallePedido } from '../_model/detallePedido.model';

@Component({
  selector: 'app-detalle-platillo-pedido',
  templateUrl: './detalle-platillo-pedido.component.html',
  styleUrls: ['./detalle-platillo-pedido.component.css']
})
export class DetallePlatilloPedidoComponent implements OnInit {

  platillo: Platillo;
  categoria: Categoria;
  pedido : Pedido;
  
  AgregarPlatilloAPedidoForm = new FormGroup({
    codigo: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(1),
    platillo: new FormGroup({
      codigo: new FormControl('')
    })
  });

  constructor(private router: Router, private categoriaService: CategoriaService, private platilloService: PlatilloService, private pedidoService: PedidoService,
    private toastr: ToastrService) {
    this.pedido = new Pedido();
   }

  ngOnInit() {
    let platilloId = localStorage.getItem("PlatilloSeleccionadoId");
    if (!platilloId) {
      this.toastr.error("Platillo invalida");
      this.router.navigate(['home']);
      return;

    }

    let categoriaId = localStorage.getItem("CategoriaSeleccionadaId");
    if (!categoriaId) {
      this.toastr.error("Categoria invalida");
      this.router.navigate(['home']);
      return;
    }
    this.categoria = new Categoria();
    this.categoriaService.listarCategoriaXId(categoriaId)
      .subscribe(data => {
        this.categoria = data;
      });

    this.platillo = new Platillo()
    this.platilloService.ListarPlatilloXId(platilloId)
      .subscribe(data => {
        this.platillo = data;
        
      });

  }

  AgregarPlatilloAPedido() {
 
    this.AgregarPlatilloAPedidoForm.value['platillo'] = this.platillo;
    this.toastr.success(this.pedidoService.AgregarPlatilloAPedido(this.AgregarPlatilloAPedidoForm.value));
    this.router.navigate(['list-categoria-pedido']);

  }

  Volver() {
    localStorage.removeItem("PlatilloSeleccionadoId");
    this.router.navigate(['list-platillo-pedido']);
  }



}
