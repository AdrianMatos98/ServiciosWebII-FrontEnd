import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from '../_model/tipo.model';
import { Observable } from 'rxjs';

@Injectable()
export class TipoService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Tipo/';

  listarTipo(estado) {
    
    return this.http.get<Tipo[]>(this.baseUrl+'ListarTipo?estado='+estado);

  }

  listarTipoXId(id) {
    return this.http.get<Tipo>(this.baseUrl+'ListarTipoXId/'+id);
  }

  AgregarTipo(tipo:Tipo):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarTipo',tipo);
  }

  ActualizarTipo(tipo:Tipo):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarTipo',tipo);
  }
  
  EliminarTipo(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'EliminarTipo/'+id,null);
  }

  RestaurarTipo(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'RestaurarTipo/'+id,null);
  }

}
