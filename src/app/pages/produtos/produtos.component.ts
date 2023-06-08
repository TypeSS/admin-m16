import { Component, OnInit } from '@angular/core';
import { Categoria, Produtos } from 'src/models/produtos/produtos';
import { ProdutosService } from 'src/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
produtos:Produtos[] = [];
categorias: Categoria[] = [];
prodModal:boolean = false;
uProdModal:boolean = false;
selectedProd?:Produtos;
prodinfo?: object;
nomeproduto:string = "";
descricao:string ="";
preco?:number;
id_categoria?:number;

selectedCategoria:object = {};


constructor(private prodService: ProdutosService){
}
  ngOnInit() {
    this.prodService.getProdutos().subscribe((res)=>{
      this.produtos = res
      console.log(this.produtos)
    })

    this.prodService.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })
  }

  abrirProdModal(){
    this.prodModal = true;
  }

  prodInfo(){
    console.log(this.selectedProd)
    this.uProdModal = true;

  }

  updateProd(){
    this.prodinfo = {
      nomeproduto:this.selectedProd!.nomeproduto,
      descricao:this.selectedProd!.descricao,
      preco:this.selectedProd!.preco,
      id_categoria:this.id_categoria
    }

    this.prodService.updateProduto(this.prodinfo).subscribe((res)=>{
      console.log("sucesso?")
    })
  }

  criarProd(){
    this.prodinfo = {
      nomeproduto: this.nomeproduto,
      descricao: this.descricao,
      preco: this.preco!,
      id_categoria:this.id_categoria
    }

    this.prodService.criarProduto(this.prodinfo).subscribe((res)=>{
    console.log("sucesso")
    })

    this.prodModal = false
  }

}
