import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReporteService } from '../_service/reporte.service';
import { ReporteTopPlatillos } from '../_model/ReporteTopPlatillos.model';
import { NgbDate, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-top-platillo',
  templateUrl: './list-top-platillo.component.html',
  styleUrls: ['./list-top-platillo.component.css']
})
export class ListTopPlatilloComponent implements OnInit {
  
  fecha2: NgbDate = this.calendar.getToday(); 
  fecha1: NgbDate = this.calendar.getToday(); 
  

  reportes: ReporteTopPlatillos[];

  constructor(private router: Router, private reporteService: ReporteService, private toastr: ToastrService,private calendar: NgbCalendar) { }

  ngOnInit() {
    this.ListarPlatillosXFechas();
  }

  ListarPlatillosXFechas() {
    
    this.reporteService.ListarPlatillosXFechas(this.fecha1.year+"-"+this.fecha1.month+"-"+this.fecha1.day ,this.fecha2.year+"-"+this.fecha2.month+"-"+this.fecha2.day )
      .subscribe(data => {
        this.reportes = data;
      });
  }

}
