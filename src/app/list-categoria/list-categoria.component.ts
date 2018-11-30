import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_model/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-categoria',
  templateUrl: './list-categoria.component.html',
  styleUrls: ['./list-categoria.component.css']
})
export class ListCategoriaComponent implements OnInit {

  
  categorias: Categoria[];


  constructor(private router: Router, private categoriaService: CategoriaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });
  }

  ListarCategoria(estado) {
    this.categoriaService.listarCategoria(estado)
      .subscribe(data => {
        this.categorias = data;
      });
  }

  AgregarCategoria() {
    this.router.navigate(['add-categoria']);
  }

  ActualizarCategoria(categoria: Categoria) {
    localStorage.removeItem("ActualizarCategoriaId");
    localStorage.setItem("ActualizarCategoriaId", categoria.codigo.toString());
    this.router.navigate(['edit-categoria']);
  }

  EliminarCategoria(categoria) {
    this.categoriaService.EliminarCategoria(categoria.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.categorias = this.categorias.filter(t => t !== categoria);
      });
  }

  RestaurarCategoria(categoria) {
    this.categoriaService.RestaurarCategoria(categoria.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.categorias = this.categorias.filter(t => t !== categoria);
      });
  }
  

  CategoriaElimnada(categoria:Categoria):boolean{

    if(categoria.estado==0){
      return true;
    }
    else{
      return false;
    }
  }

}
