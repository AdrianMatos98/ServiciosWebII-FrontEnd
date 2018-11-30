import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { UsuarioService } from "../_service/usuario.service";
import { ToastrService } from "ngx-toastr";


@Injectable()
export class UsuarioGuard implements CanActivate {

    constructor(private usuarioService : UsuarioService,private router: Router, private toastr: ToastrService){

    }

    canActivate():boolean{
        var usuario = this.usuarioService.getUsuarioLogueado();
        if(usuario==null){
            this.toastr.error("Usuario no autenticado");
            this.router.navigate(['/login']);
        }
        return usuario!=null;
    }

}
