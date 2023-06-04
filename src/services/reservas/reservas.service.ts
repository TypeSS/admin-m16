import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
import { Reservas } from 'src/models/reservas/reservas';

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
}
