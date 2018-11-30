import { Component, OnInit } from '@angular/core';
import { Categoria } from '../_model/categoria.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { PlatilloService } from '../_service/platillo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-platillo',
  templateUrl: './add-platillo.component.html',
  styleUrls: ['./add-platillo.component.css']
})
export class AddPlatilloComponent implements OnInit {

  categorias: Categoria[];
  AgregarPlatilloForm = new FormGroup({
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

    this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });

  }


  AgregarPlatillo() {
    
      this.platilloService.AgregarPlatillo(this.AgregarPlatilloForm.value)
        .subscribe(data => {
          if(data!="Platillo agregado"){
            this.toastr.error(data);
          }
          else{
            this.router.navigate(['list-platillo']);
            this.toastr.success(data);
          }
          
        });
    

  }

}
