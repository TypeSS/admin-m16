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
    return this.http.get<Produtos[]>(this.urlService.getUrl("produtos"));
  }

  getCategoria():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlService.getUrl("produtos/categorias"));
  }

  criarProduto(produto: Produtos, file: File): Observable<Produtos> {
    const formData: FormData = new FormData();
    formData.append('nomeproduto', produto.nomeproduto);
    formData.append('descricao', produto.descricao);
    formData.append('preco', String(produto.preco));
    formData.append('id_categoria', String(produto.id_categoria));
    formData.append('imagem', file.name);
    formData.append('ficheiro', file)


    console.log(formData)

    return this.http.post<Produtos>(this.urlService.getUrl('produtos'), formData);
  }

  updateProduto(produto:Produtos):Observable<Produtos>{
    return this.http.put<Produtos>(this.urlService.getUrl("produtos"), produto)
  }

  deleteProduto(id:number):Observable<any>{
    console.log(id)
    return this.http.delete(this.urlService.getUrl("produtos/"+id))
  }
}
