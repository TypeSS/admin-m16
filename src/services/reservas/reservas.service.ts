import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
import { LugaresMesa, Reservas } from 'src/models/reservas/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getReservas():Observable<Reservas[]>{
    return this.http.get<Reservas[]>(this.urlService.getUrl("reserva"));
  }

  mudarEstado(estado:object):Observable<any>{
    return this.http.put<any>(this.urlService.getUrl("estadoreserva"), estado)
  }

  getMesasRes(id_restaurante:number):Observable<LugaresMesa[]>{
    return this.http.get<LugaresMesa[]>(this.urlService.getUrl("mesasres/"+id_restaurante))
  }
}
