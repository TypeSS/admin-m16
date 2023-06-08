import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from '../url/url.service';
import { Categoria, Produtos } from 'src/models/produtos/produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  getProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>(this.urlService.getUrl("produto"));
  }

  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlService.getUrl("categorias"));
  }

  criarProduto(produto:object):Observable<Produtos>{
    return this.http.post<Produtos>(this.urlService.getUrl("produto"),produto)
  }
}
