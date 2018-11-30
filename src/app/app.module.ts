import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule,ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddTipoComponent } from './add-tipo/add-tipo.component';
import { EditTipoComponent } from './edit-tipo/edit-tipo.component';
import { ListTipoComponent } from './list-tipo/list-tipo.component';
import { TipoService } from './_service/tipo.service';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { UsuarioService } from './_service/usuario.service';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { CategoriaService } from './_service/categoria.service';
import { ListPlatilloComponent } from './list-platillo/list-platillo.component';
import { AddPlatilloComponent } from './add-platillo/add-platillo.component';
import { EditPlatilloComponent } from './edit-platillo/edit-platillo.component';
import { PlatilloService } from './_service/platillo.service';
import { UsuarioGuard } from './_guard/usuario.guard';
import { ListCategoriaPedidoComponent } from './list-categoria-pedido/list-categoria-pedido.component';
import { ListPlatilloPedidoComponent } from './list-platillo-pedido/list-platillo-pedido.component';
import { DetallePlatilloPedidoComponent } from './detalle-platillo-pedido/detalle-platillo-pedido.component';
import { PedidoService } from './_service/pedido.service';
import { PedidoActualComponent } from './pedido-actual/pedido-actual.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListPedidoPendienteComponent } from './list-pedido-pendiente/list-pedido-pendiente.component';
import { ListPedidoCompletoComponent } from './list-pedido-completo/list-pedido-completo.component';
import { ListTopPlatilloComponent } from './list-top-platillo/list-top-platillo.component';
import { ReporteService } from './_service/reporte.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddTipoComponent,
    EditTipoComponent,
    ListTipoComponent,
    HomeComponent,
    ListUsuarioComponent,
    AddUsuarioComponent,
    EditUsuarioComponent,
    EditCategoriaComponent,
    ListCategoriaComponent,
    AddCategoriaComponent,
    ListPlatilloComponent,
    AddPlatilloComponent,
    EditPlatilloComponent,
    ListCategoriaPedidoComponent,
    ListPlatilloPedidoComponent,
    DetallePlatilloPedidoComponent,
    PedidoActualComponent,
    NotFoundComponent,
    ListPedidoPendienteComponent,
    ListPedidoCompletoComponent,
    ListTopPlatilloComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule.forRoot()
  ],
  providers: [TipoService,UsuarioService,CategoriaService,PlatilloService,UsuarioGuard,PedidoService,ReporteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
