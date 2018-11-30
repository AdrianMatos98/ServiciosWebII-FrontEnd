import { Component, OnInit } from '@angular/core';
import { Tipo } from '../_model/tipo.model';
import { Router } from '@angular/router';
import { TipoService } from '../_service/tipo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-tipo',
  templateUrl: './list-tipo.component.html',
  styleUrls: ['./list-tipo.component.css']
})
export class ListTipoComponent implements OnInit {

  tipos: Tipo[];


  constructor(private router: Router, private tipoService: TipoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.tipoService.listarTipo(1)
      .subscribe(data => {
        this.tipos = data;
      });
  }

  ListarTipo(estado) {
    this.tipoService.listarTipo(estado)
      .subscribe(data => {
        this.tipos = data;
      });
  }

  AgregarTipo() {
    this.router.navigate(['add-tipo']);
  }

  ActualizarTipo(tipo: Tipo) {
    localStorage.removeItem("ActualizarTipoId");
    localStorage.setItem("ActualizarTipoId", tipo.codigo.toString());
    this.router.navigate(['edit-tipo']);
  }

  EliminarTipo(tipo) {
    this.tipoService.EliminarTipo(tipo.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.tipos = this.tipos.filter(t => t !== tipo);
      });
  }

  RestaurarTipo(tipo) {
    this.tipoService.RestaurarTipo(tipo.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.tipos = this.tipos.filter(t => t !== tipo);
      });
  }
  

  TipoElimnado(tipo:Tipo):boolean{

    if(tipo.estado==0){
      return true;
    }
    else{
      return false;
    }
  }

}
