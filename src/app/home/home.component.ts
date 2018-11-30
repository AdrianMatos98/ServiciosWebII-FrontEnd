import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../_service/usuario.service';
import { Usuario } from '../_model/usuario.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  UsuarioLogueado:Usuario;
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit() {
    this.UsuarioLogueado = this.usuarioService.getUsuarioLogueado();
  }

}
