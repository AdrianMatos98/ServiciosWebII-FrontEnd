import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../_model/tipo.model';
import { Observable } from 'rxjs';
import { Categoria } from '../_model/categoria.model';

@Injectable()
export class CategoriaService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Categoria/';

  listarCategoria(estado) {
    return this.http.get<Categoria[]>(this.baseUrl+'ListarCategoria?estado='+estado);
  }

  listarCategoriaXId(id) {
    return this.http.get<Categoria>(this.baseUrl+'ListarCategoriaXId/'+id);
  }

  AgregarCategoria(categoria:Categoria):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarCategoria',categoria);
  }

  ActualizarCategoria(categoria:Categoria):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarCategoria',categoria);
  }
  
  EliminarCategoria(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'EliminarCategoria/'+id,null);
  }

  RestaurarCategoria(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'RestaurarCategoria/'+id,null);
  }
}
