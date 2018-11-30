import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReporteTopPlatillos } from '../_model/ReporteTopPlatillos.model';

@Injectable()
export class ReporteService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8082/Proyecto/rest/Reporte/';


  ListarPlatillosXFechas(fecha1,fecha2) {
    return this.http.get<ReporteTopPlatillos[]>(this.baseUrl+'ListarPlatillosXFechas?fecha1='+fecha1+'&fecha2='+fecha2);
  }

}
