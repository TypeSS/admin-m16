import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from '../url/url.service';
import { Encomendas, Func, PedProd, Pedido, ProdEnc, Restaurante } from 'src/models/restaurante/restaurante';
import { PedidosComponent } from 'src/app/pages/pedidos/pedidos.component';

@Injectable({
  providedIn: 'root'
})
export class RestauranteService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getRestaurantes():Observable<Restaurante[]>{
    return this.http.get<Restaurante[]>(this.urlService.getUrl("restaurantes"));
    }

  getEncomenda():Observable<Encomendas[]>{
    return this.http.get<Encomendas[]>(this.urlService.getUrl('restaurantes/encomendas'))
  }


  getProdEnc(id:number):Observable<ProdEnc[]>{
    return this.http.get<ProdEnc[]>(this.urlService.getUrl('restaurantes/encomendas/produtos/'+id))
  }

  updateEnc(encInfo:any){
    return this.http.put<any>(this.urlService.getUrl('restaurantes/encomendas'), encInfo)
  }

  fazerPedido(pedido:object):Observable<any>{
    console.log(pedido)
    return this.http.post<any>(this.urlService.getUrl('restaurantes/pedido'), pedido)
  }

  getPedido():Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.urlService.getUrl("restaurantes/pedidos"))
  }

  updatePedido(estado:string){
    return this.http.put<any>(this.urlService.getUrl("restaurantes/pedido"), estado);
  }


  pedidoProd(produtos:PedProd[]):Observable<PedProd[]>{
    return this.http.post<PedProd[]>(this.urlService.getUrl("restaurantes/pedido/produtos"), produtos)
  }

  pedidoProdUpdate(produtos:PedProd[]):Observable<PedProd[]>{
    return this.http.post<PedProd[]>(this.urlService.getUrl("restaurantes/pedidos/update"), produtos)
  }

  getPedProd(id:number):Observable<any>{
    return this.http.get<any>(this.urlService.getUrl("restaurantes/pedido/produtos/"+id))
  }

  lucro():Observable<any>{
    return this.http.get<any>(this.urlService.getUrl("restaurantes/lucro"))
  }

  getMesasRest(id:number):Observable<any>{
    return this.http.get<any>(this.urlService.getUrl(`restaurantes/mesas/${id}`))
  }


}
