import { Component } from '@angular/core';
import { CategoriaService } from '../_service/categoria.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-categoria',
  templateUrl: './add-categoria.component.html',
  styleUrls: ['./add-categoria.component.css']
})
export class AddCategoriaComponent {

  constructor(private router: Router, private categoriService: CategoriaService,private toastr: ToastrService) { }
  
  

  AgregarCategoriaForm = new FormGroup({
    codigo: new FormControl(''),
    descripcion: new FormControl(''),
    estado: new FormControl('')
  });
  

 

  AgregarCategoria() {
    this.categoriService.AgregarCategoria(this.AgregarCategoriaForm.value)
      .subscribe( data => {
        if(data!="Categoria agregada"){
          this.toastr.error(data);
        }
        else{
          this.router.navigate(['list-categoria']);
          this.toastr.success(data);
        }
        
      });
  }

}
