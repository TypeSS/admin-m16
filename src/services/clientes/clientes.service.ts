import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Observable } from 'rxjs';
import { Clientes } from 'src/models/clientes/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getUsers():Observable<Clientes[]>{
    return this.http.get<Clientes[]>(this.urlService.getUrl("clientes"));
  }

  updateCliente(info:Clientes):Observable<Clientes>{
    return this.http.put<Clientes>(this.urlService.getUrl("clientes"), info)
  }

  deleteCli(id:number):Observable<any>{
    return this.http.delete(this.urlService.getUrl("clientes/"+id))
  }

  count():Observable<any>{
    return this.http.get<any>(this.urlService.getUrl('clientes/count'));
  }
}
