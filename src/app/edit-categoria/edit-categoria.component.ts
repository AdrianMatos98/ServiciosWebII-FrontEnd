import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_model/categoria.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-categoria',
  templateUrl: './edit-categoria.component.html',
  styleUrls: ['./edit-categoria.component.css']
})
export class EditCategoriaComponent implements OnInit {

  categoria: Categoria;
  ActualizarCategoriaForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl('')
  });
  
  constructor( private router: Router, private categoriaService: CategoriaService, private toastr: ToastrService) { }

  ngOnInit() {
    let categoriaId = localStorage.getItem("ActualizarCategoriaId");
    if (!categoriaId) {
      this.toastr.error("Categoria invalida");
      this.router.navigate(['list-categoria']);
      return;
    }

    this.categoriaService.listarCategoriaXId(+categoriaId)
      .subscribe(data => {
        this.ActualizarCategoriaForm.setValue(data);
      });
  }

  ActualizarCategoria() {
    this.categoriaService.ActualizarCategoria(this.ActualizarCategoriaForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data != "Categoria actualizada") {
            this.toastr.error(data);
          }
          else {
            this.router.navigate(['list-categoria']);
            this.toastr.success(data);
          }
        });
  }


}
