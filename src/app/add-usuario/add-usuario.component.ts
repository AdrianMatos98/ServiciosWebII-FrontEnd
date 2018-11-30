import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TipoService } from '../_service/tipo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuarioService } from '../_service/usuario.service';
import { Tipo } from '../_model/tipo.model';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  tipos: Tipo[];
  AgregarUsuarioForm = new FormGroup({
    codigo: new FormControl(''),
    nombre: new FormControl(''),
    password: new FormControl(''),
    estado: new FormControl(''),
    tipo: new FormGroup({
      codigo: new FormControl(0),
      descripcion: new FormControl(''),
      estado: new FormControl('')
    })
  });
  
  constructor( private router: Router, private tipoService: TipoService, private usuarioService: UsuarioService, private toastr: ToastrService) { }


  ngOnInit() {

    this.tipoService.listarTipo(1)
      .subscribe(data => {
        this.tipos = data;
      });

  }


  AgregarUsuario() {
    
      this.usuarioService.AgregarUsuario(this.AgregarUsuarioForm.value)
        .subscribe(data => {
          if(data!="Usuario agregado"){
            this.toastr.error(data);
          }
          else{
            this.router.navigate(['list-usuario']);
            this.toastr.success(data);
          }
          
        });
    

  }

}
