import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ReservasComponent } from './pages/reservas/reservas.component';
import { InfocardComponent } from './components/infocard/infocard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { UrlService } from 'src/services/url/url.service';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { MultiSelectModule } from 'primeng/multiselect';
import { ListboxModule } from 'primeng/listbox';
import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { DropdownModule } from 'primeng/dropdown';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { FileUploadModule } from 'primeng/fileupload';
import {ImageModule} from 'primeng/image';
import { LoginComponent } from './pages/login/login.component';
import { ToastModule } from 'primeng/toast';
import { AdminpagesComponent } from './pages/adminpages/adminpages.component';
import { FuncionariosComponent } from './pages/funcionarios/funcionarios.component';
import { ChartModule } from 'primeng/chart';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientesComponent,
    ReservasComponent,
    InfocardComponent,
    SidebarComponent,
    ProdutosComponent,
    EncomendasComponent,
    LoginComponent,
    AdminpagesComponent,
    FuncionariosComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    PaginatorModule,
    MultiSelectModule,
    ListboxModule,
    DialogModule,
    MessagesModule,
    DropdownModule,
    FileUploadModule,
    ImageModule,
    ToastModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
