import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../_model/usuario.model';

@Injectable()
export class UsuarioService {

  private EstaLogueado;
  public UsuarioLogueado:Usuario;

  constructor(private http: HttpClient) {
    this.EstaLogueado=false;
   }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Usuario/';

  listarUsuarioXTipo(estado,tipo) {
    return this.http.get<Usuario[]>(this.baseUrl+'/ListarUsuarioXTipo?estado='+estado+'&tipo='+tipo);
  }

  listarUsuarioXId(id) {
    return this.http.get<Usuario>(this.baseUrl+'ListarUsuarioXId/'+id);
  }

  AgregarUsuario(usuario:Usuario):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarUsuario',usuario);
  }

  ActualizarUsuario(usuario:Usuario):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarUsuario',usuario);
  }
  
  EliminarUsuario(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'EliminarUsuario/'+id,null);
  }

  RestaurarUsuario(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'RestaurarUsuario/'+id,null);
  }

  Login(usuario) {
    return this.http.post<Usuario>(this.baseUrl+'Login',usuario);
  }

  setUsuarioLogueado(usuario:Usuario) {
    this.EstaLogueado = true;
    this.UsuarioLogueado = usuario;
    localStorage.removeItem('UsuarioActual');
    localStorage.setItem('UsuarioActual', JSON.stringify(usuario));
  
  }

  getUsuarioLogueado() {
  	return JSON.parse(localStorage.getItem('UsuarioActual'));
  }
}
