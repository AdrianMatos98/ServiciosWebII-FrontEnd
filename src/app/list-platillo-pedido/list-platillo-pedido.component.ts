import { Component, OnInit } from '@angular/core';
import { Platillo } from '../_model/platillo.model';
import { PlatilloService } from '../_service/platillo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Categoria } from '../_model/categoria.model';
import { CategoriaService } from '../_service/categoria.service';

@Component({
  selector: 'app-list-platillo-pedido',
  templateUrl: './list-platillo-pedido.component.html',
  styleUrls: ['./list-platillo-pedido.component.css']
})
export class ListPlatilloPedidoComponent implements OnInit {

  platillos: Platillo[];
  categoria: Categoria;


  constructor(private router: Router, private categoriaService: CategoriaService, private platilloService: PlatilloService, private toastr: ToastrService) { }

  ngOnInit() {
    let categoriaId = localStorage.getItem("CategoriaSeleccionadaId");
    if (!categoriaId) {
      this.toastr.error("Categoria invalida");
      this.router.navigate(['/home']);
      return;
    }

    this.categoria = new Categoria();
    this.categoriaService.listarCategoriaXId(categoriaId)
      .subscribe(data => {
        this.categoria = data;
        this.platilloService.ListarPlatilloXCategoria_Nombre(1, this.categoria.codigo, '')
          .subscribe(data => {
            this.platillos = data;
          });
      });

  }


  SeleccionarPlatillo(platillo) {

    localStorage.removeItem("PlatilloSeleccionadoId");
    localStorage.setItem("PlatilloSeleccionadoId", platillo.codigo.toString());
    this.router.navigate(['detalle-platillo-pedido']);
  }

  Volver(){
    localStorage.removeItem("CategoriaSeleccionadaId");
    this.router.navigate(['list-categoria-pedido']);
  }

}
