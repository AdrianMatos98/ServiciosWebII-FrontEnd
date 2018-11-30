import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TipoService } from '../_service/tipo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-tipo',
  templateUrl: './add-tipo.component.html',
  styleUrls: ['./add-tipo.component.css']
})
export class AddTipoComponent  {

  constructor(private router: Router, private tipoService: TipoService,private toastr: ToastrService) { }
  
  


  AgregarTipoForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl('')
  });
  
  

  AgregarTipo() {
    this.tipoService.AgregarTipo(this.AgregarTipoForm.value)
      .subscribe( data => {
        if(data!="Tipo agregado"){
          this.toastr.error(data);
        }
        else{
          this.router.navigate(['list-tipo']);
          this.toastr.success(data);
        }
        
      });
  }

}
