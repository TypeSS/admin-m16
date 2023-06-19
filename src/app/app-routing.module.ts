import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminpagesComponent } from './pages/adminpages/adminpages.component';



const routes: Routes = [
  {path:'', redirectTo:'/admin/dashboard', pathMatch:'full'},
  {path:'admin', component:AdminpagesComponent, children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'clientes', component:ClientesComponent},
    {path:'reservas', component:ReservasComponent},
    {path:'produtos', component:ProdutosComponent},
    {path:'encomendas', component:EncomendasComponent}
  ] },
  {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
