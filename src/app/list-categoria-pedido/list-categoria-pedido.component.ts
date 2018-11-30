import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_model/categoria.model';
import { CategoriaService } from '../_service/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lis-categoria-pedido',
  templateUrl: './list-categoria-pedido.component.html',
  styleUrls: ['./list-categoria-pedido.component.css']
})
export class ListCategoriaPedidoComponent implements OnInit {

  categorias: Categoria[];


  constructor(private router: Router, private categoriaService: CategoriaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });
  }

  ListarCategoria() {
    this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });
  }

  SeleccionarCategoria(categoria){

    localStorage.removeItem("CategoriaSeleccionadaId");
    localStorage.setItem("CategoriaSeleccionadaId", categoria.codigo.toString());
    this.router.navigate(['list-platillo-pedido']);
  }

}
