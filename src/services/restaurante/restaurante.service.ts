import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
import { Encomendas, ProdEnc } from 'src/models/restaurante/restaurante';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getEncomenda():Observable<Encomendas[]>{
    return this.http.get<Encomendas[]>(this.urlService.getUrl('encomenda'))
  }


  getProdEnc(id:number):Observable<ProdEnc[]>{
    return this.http.get<ProdEnc[]>(this.urlService.getUrl('prodenc/'+id))
  }

}
