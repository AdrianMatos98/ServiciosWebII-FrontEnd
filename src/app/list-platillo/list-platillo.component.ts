import { Component, OnInit } from '@angular/core';
import { Platillo } from '../_model/platillo.model';
import { Categoria } from '../_model/categoria.model';
import { Router } from '@angular/router';
import { CategoriaService } from '../_service/categoria.service';
import { PlatilloService } from '../_service/platillo.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-platillo',
  templateUrl: './list-platillo.component.html',
  styleUrls: ['./list-platillo.component.css']
})
export class ListPlatilloComponent implements OnInit {

  platillos: Platillo[];
  categorias: Categoria[];
  CategoriaSeleccionada: number=1;
  EstadoSeleccionado: number=1 ;
  NombreIngresado = new FormControl('');


  

  constructor(private router: Router, private categoriaService: CategoriaService, private platilloService: PlatilloService, private toastr: ToastrService) { }

  ngOnInit() {
    this.platilloService.ListarPlatilloXCategoria_Nombre(1,1,"")
      .subscribe(data => {
        this.platillos = data;
      });
      this.categoriaService.listarCategoria(1)
      .subscribe(data => {
        this.categorias = data;
      });
      this.onChanges();
  }

  onChanges(): void {
    this.NombreIngresado.valueChanges.subscribe(val=>{
      if(val==null){
        this.FiltrarXNombre("");
      }
      else{
        this.FiltrarXNombre(val.toString());
      }
      
    });
      
  }

  FiltrarXCategoria(categoria) {
    this.CategoriaSeleccionada=categoria;
    this.platilloService.ListarPlatilloXCategoria_Nombre(this.EstadoSeleccionado,this.CategoriaSeleccionada,this.NombreIngresado.value)
      .subscribe(data => {
        this.platillos = data;
      });
  }

  FiltrarXNombre(nombre:string) {
    this.platilloService.ListarPlatilloXCategoria_Nombre(this.EstadoSeleccionado,this.CategoriaSeleccionada,nombre)
      .subscribe(data => {
        this.platillos = data;
      });
  }

  FiltrarXEstado(estado) {
    this.EstadoSeleccionado=estado
    this.platilloService.ListarPlatilloXCategoria_Nombre(this.EstadoSeleccionado,this.CategoriaSeleccionada,this.NombreIngresado.value)
      .subscribe(data => {
        this.platillos = data;
      });
  }

  AgregarPlatillo() {
    this.router.navigate(['add-platillo']);
  }

  ActualizarPlatillo(platillo: Platillo) {
    localStorage.removeItem("ActualizarPlatilloId");
    localStorage.setItem("ActualizarPlatilloId", platillo.codigo.toString());
    this.router.navigate(['edit-platillo']);
  }

  EliminarPlatillo(platillo) {
    this.platilloService.EliminarPlatillo(platillo.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.platillos = this.platillos.filter(u => u !== platillo);
      });
  }

  RestaurarPlatillo(platillo) {
    this.platilloService.RestaurarPlatillo(platillo.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.platillos = this.platillos.filter(u => u !== platillo);
      });
  }
  
  PlatilloElimnado(platillo:Platillo):boolean{

    if(platillo.estado==0){
      return true;
    }
    else{
      return false;
    }
  }

}
