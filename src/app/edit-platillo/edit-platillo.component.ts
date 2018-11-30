import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_model/categoria.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { PlatilloService } from '../_service/platillo.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-platillo',
  templateUrl: './edit-platillo.component.html',
  styleUrls: ['./edit-platillo.component.css']
})
export class EditPlatilloComponent implements OnInit {

  categorias: Categoria[];

  ActualizarPlatilloForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    descripcion: new FormControl(''),
    precio: new FormControl(''),
    estado: new FormControl(''),
    imagen: new FormControl(''),
    categoria: new FormGroup({
      codigo: new FormControl(0),
      descripcion: new FormControl(''),
      estado: new FormControl('')
    })
  });

  constructor( private router: Router, private categoriaService: CategoriaService, private platilloService: PlatilloService, private toastr: ToastrService) { }
  
  
  ngOnInit() {
    let PlatilloId = localStorage.getItem("ActualizarPlatilloId");
    if(!PlatilloId) {
      this.toastr.error("Platillo invalido");
      this.router.navigate(['list-platillo']);
      return;
    }
    this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });


    this.platilloService.ListarPlatilloXId(+PlatilloId)
      .subscribe( data => {
        this.ActualizarPlatilloForm.setValue(data);
      });
  }

  ActualizarPlatillo() {
    
    this.platilloService.ActualizarPlatillo(this.ActualizarPlatilloForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data!="Platillo actualizado"){
            this.toastr.error(data);
          }
          else{
            this.router.navigate(['list-platillo']);
            this.toastr.success(data);
          }
        });
      
  }

}
