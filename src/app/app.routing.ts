import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { ListTipoComponent } from './list-tipo/list-tipo.component';
import { AddTipoComponent } from './add-tipo/add-tipo.component';
import { EditTipoComponent } from './edit-tipo/edit-tipo.component';
import { HomeComponent } from './home/home.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { ListCategoriaComponent } from './list-categoria/list-categoria.component';
import { AddCategoriaComponent } from './add-categoria/add-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { AddPlatilloComponent } from './add-platillo/add-platillo.component';
import { ListPlatilloComponent } from './list-platillo/list-platillo.component';
import { EditPlatilloComponent } from './edit-platillo/edit-platillo.component';
import { UsuarioGuard } from './_guard/usuario.guard';
import { ListCategoriaPedidoComponent } from './list-categoria-pedido/list-categoria-pedido.component';
import { ListPlatilloPedidoComponent } from './list-platillo-pedido/list-platillo-pedido.component';
import { DetallePlatilloPedidoComponent } from './detalle-platillo-pedido/detalle-platillo-pedido.component';
import { PedidoActualComponent } from './pedido-actual/pedido-actual.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ListPedidoPendienteComponent } from './list-pedido-pendiente/list-pedido-pendiente.component';
import { ListPedidoCompletoComponent } from './list-pedido-completo/list-pedido-completo.component';
import { ListTopPlatilloComponent } from './list-top-platillo/list-top-platillo.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-tipo', component: AddTipoComponent, canActivate: [UsuarioGuard] },
  { path: 'list-tipo', component: ListTipoComponent, canActivate: [UsuarioGuard] },
  { path: 'edit-tipo', component: EditTipoComponent, canActivate: [UsuarioGuard] },
  { path: 'add-usuario', component: AddUsuarioComponent, canActivate: [UsuarioGuard] },
  { path: 'list-usuario', component: ListUsuarioComponent, canActivate: [UsuarioGuard] },
  { path: 'edit-usuario', component: EditUsuarioComponent, canActivate: [UsuarioGuard] },
  { path: 'add-categoria', component: AddCategoriaComponent, canActivate: [UsuarioGuard] },
  { path: 'list-categoria', component: ListCategoriaComponent, canActivate: [UsuarioGuard] },
  { path: 'edit-categoria', component: EditCategoriaComponent, canActivate: [UsuarioGuard] },
  { path: 'add-platillo', component: AddPlatilloComponent, canActivate: [UsuarioGuard] },
  { path: 'list-platillo', component: ListPlatilloComponent, canActivate: [UsuarioGuard] },
  { path: 'edit-platillo', component: EditPlatilloComponent, canActivate: [UsuarioGuard] },
  { path: 'list-categoria-pedido', component: ListCategoriaPedidoComponent, canActivate: [UsuarioGuard] },
  { path: 'list-platillo-pedido', component: ListPlatilloPedidoComponent, canActivate: [UsuarioGuard] },
  { path: 'detalle-platillo-pedido', component: DetallePlatilloPedidoComponent, canActivate: [UsuarioGuard] },
  { path: 'pedido-actual', component: PedidoActualComponent , canActivate: [UsuarioGuard]},
  { path: 'home', component: HomeComponent , canActivate: [UsuarioGuard]},
  { path: 'list-pedido-pendiente', component: ListPedidoPendienteComponent , canActivate: [UsuarioGuard]},
  { path: 'list-pedido-completo', component: ListPedidoCompletoComponent , canActivate: [UsuarioGuard]},
  { path: 'list-top-platillo', component: ListTopPlatilloComponent , canActivate: [UsuarioGuard]},
  { path: '', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);