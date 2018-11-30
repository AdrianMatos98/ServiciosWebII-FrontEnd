import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsuarioService } from './_service/usuario.service';
import { Usuario } from './_model/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  isNavbarCollapsed = true;
  usuarioLogueado = null;

  title = 'Proyecto';

  constructor(private router: Router, private toastr: ToastrService, private usuarioSevice: UsuarioService) { }

  ngOnInit(): void {
    this.UsuarioLogueado()
    this.EsAdministrador();
    this.EsCliente();
  }


  EsCliente():boolean{
    if (this.UsuarioLogueado()) {
      if(this.usuarioLogueado.tipo.codigo==3) {
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  EsCocina():boolean{
    if (this.UsuarioLogueado()) {
      if(this.usuarioLogueado.tipo.codigo==2) {
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  EsAdministrador():boolean{
    if (this.UsuarioLogueado()) {
      if(this.usuarioLogueado.tipo.codigo==1) {
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }

  UsuarioLogueado(): boolean {
    this.usuarioLogueado = this.usuarioSevice.getUsuarioLogueado();
    if (this.usuarioLogueado == null) {
      return false
    }
    else {
      return true
    }
  }

  Logout() {

    this.usuarioSevice.setUsuarioLogueado(null)

    this.UsuarioLogueado();
    this.router.navigate(['login']);


  }
}
