import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../_service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../_model/usuario.model';
import { Tipo } from '../_model/tipo.model';
import { TipoService } from '../_service/tipo.service';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarios: Usuario[];
  tipos: Tipo[];
  TipoSeleccionado: number=1;
  EstadoSeleccionado: number=1 ;

  constructor(private router: Router, private tipoService: TipoService, private usuarioService: UsuarioService, private toastr: ToastrService) { }

  ngOnInit() {
    this.usuarioService.listarUsuarioXTipo(1,1)
      .subscribe(data => {
        this.usuarios = data;
      });
      this.tipoService.listarTipo(1)
      .subscribe(data => {
        this.tipos = data;
      });
  }

  FiltrarXTipo(tipo) {
    this.TipoSeleccionado=tipo;
    this.usuarioService.listarUsuarioXTipo(this.EstadoSeleccionado,this.TipoSeleccionado)
      .subscribe(data => {
        this.usuarios = data;
      });
  }

  FiltrarXEstado(estado) {
    this.EstadoSeleccionado=estado
    this.usuarioService.listarUsuarioXTipo(this.EstadoSeleccionado,this.TipoSeleccionado)
      .subscribe(data => {
        this.usuarios = data;
      });
  }

  AgregarUsuario() {
    this.router.navigate(['add-usuario']);
  }

  ActualizarUsuario(usuario: Usuario) {
    localStorage.removeItem("ActualizarUsuarioId");
    localStorage.setItem("ActualizarUsuarioId", usuario.codigo.toString());
    this.router.navigate(['edit-usuario']);
  }

  EliminarUsuario(usuario) {
    this.usuarioService.EliminarUsuario(usuario.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      });
  }

  RestaurarUsuario(usuario) {
    this.usuarioService.RestaurarUsuario(usuario.codigo)
      .subscribe(data => {
        this.toastr.success(data);
        this.usuarios = this.usuarios.filter(u => u !== usuario);
      });
  }
  
  UsuarioElimnado(usuario:Usuario):boolean{

    if(usuario.estado==0){
      return true;
    }
    else{
      return false;
    }
  }
}
