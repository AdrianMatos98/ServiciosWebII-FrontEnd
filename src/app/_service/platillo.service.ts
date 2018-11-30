import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Platillo } from '../_model/platillo.model';

@Injectable()
export class PlatilloService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Platillo/';


  ListarPlatilloXCategoria_Nombre(estado,categoria,nombre) {
    return this.http.get<Platillo[]>(this.baseUrl+'ListarPlatilloXCategoria_Nombre?estado='+estado+'&categoria='+categoria+'&nombre='+nombre);
  }

  ListarPlatilloXId(id) {
    return this.http.get<Platillo>(this.baseUrl+'ListarPlatilloXId/'+id);
  }

  AgregarPlatillo(platillo:Platillo):Observable<string>{
    return this.http.post<string>(this.baseUrl+'AgregarPlatillo',platillo);
  }

  ActualizarPlatillo(platillo:Platillo):Observable<string>{
    return this.http.put<string>(this.baseUrl+'ActualizarPlatillo',platillo);
  }
  
  EliminarPlatillo(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'EliminarPlatillo/'+id,null);
  }

  RestaurarPlatillo(id):Observable<string>{
    return this.http.put<string>(this.baseUrl+'RestaurarPlatillo/'+id,null);
  }
}
