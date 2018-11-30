import { Component, OnInit } from '@angular/core';
import { Tipo } from '../_model/tipo.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoService } from '../_service/tipo.service';
import { UsuarioService } from '../_service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  
  
  tipos: Tipo[];
  ActualizarUsuarioForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    password: new FormControl(''),
    estado: new FormControl(''),
    tipo: new FormGroup({
      codigo: new FormControl(''),
      descripcion: new FormControl(''),
      estado: new FormControl('')
    })
  });

  constructor( private router: Router, private tipoService: TipoService, private usuarioService: UsuarioService, private toastr: ToastrService) { }
  
  
  ngOnInit() {
    let UsuarioId = localStorage.getItem("ActualizarUsuarioId");
    if(!UsuarioId) {
      this.toastr.error("Usuario invalido");
      this.router.navigate(['list-usuario']);
      return;
    }
    this.tipoService.listarTipo(1)
      .subscribe(data => {
        this.tipos = data;
      });


    this.usuarioService.listarUsuarioXId(+UsuarioId)
      .subscribe( data => {
        this.ActualizarUsuarioForm.setValue(data);
      });
  }

  ActualizarUsuario() {
    
    this.usuarioService.ActualizarUsuario(this.ActualizarUsuarioForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data!="Usuario actualizado"){
            this.toastr.error(data);
          }
          else{
            this.router.navigate(['list-usuario']);
            this.toastr.success(data);
          }
        });
      
  }
}
