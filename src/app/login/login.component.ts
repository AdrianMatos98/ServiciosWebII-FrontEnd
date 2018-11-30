import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import { UsuarioService } from '../_service/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../_model/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  LoginForm = new FormGroup({
    nombre: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor( private router: Router, private usuarioService: UsuarioService, private toastr: ToastrService) { }



  Login() {
    
      this.usuarioService.Login(this.LoginForm.value)
        .subscribe(data => {
          if(data==null){
            this.toastr.error("Usuario y/o contraseña invalido");
            
          }
          else{
            this.usuarioService.setUsuarioLogueado(data);
            this.router.navigate(['home']);
          }
          
        });
    

  
  }



}