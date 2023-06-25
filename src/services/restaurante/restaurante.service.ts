import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
import { Encomendas, Func, ProdEnc } from 'src/models/restaurante/restaurante';

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

  getAdmin():Observable<Func[]>{
    return this.http.get<Func[]>(this.urlService.getUrl('getadmin'))
  }

  updateFunc(info:Func):Observable<Func>{
    return this.http.put<Func>(this.urlService.getUrl("admin"), info)
  }

  deleteFunc(id:number):Observable<any>{
    return this.http.delete<any>(this.urlService.getUrl('admin/'+id))
  }

  lucro():Observable<any>{
    return this.http.get<any>(this.urlService.getUrl('lucro'))
  }

  updateEnc(encInfo:any){
    return this.http.put<any>(this.urlService.getUrl('encomenda'), encInfo)
  }

}
