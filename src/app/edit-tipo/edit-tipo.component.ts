import { Component, OnInit } from '@angular/core';
import { Tipo } from '../_model/tipo.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoService } from '../_service/tipo.service';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrls: ['./edit-tipo.component.css']
})
export class EditTipoComponent implements OnInit {

  tipo: Tipo;
  
  ActualizarTipoForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl('')
  });
  
  constructor(private router: Router, private tipoService: TipoService,private toastr: ToastrService) { }
  
  ngOnInit() {
    let tipoId = localStorage.getItem("ActualizarTipoId");
    if(!tipoId) {
      this.toastr.error("Tipo invalido");
      this.router.navigate(['list-tipo']);
      return;
    }
    this.tipoService.listarTipoXId(+tipoId)
      .subscribe( data => {
        this.ActualizarTipoForm.setValue(data);
      });
  }

  ActualizarTipo() {
    this.tipoService.ActualizarTipo(this.ActualizarTipoForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data!="Tipo actualizado"){
            this.toastr.error(data);
          }
          else{
            this.router.navigate(['list-tipo']);
            this.toastr.success(data);
          }
        });
  }

}
