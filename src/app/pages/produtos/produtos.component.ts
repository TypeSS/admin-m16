import { Component, OnInit } from '@angular/core';
import { FileUploadEvent } from 'primeng/fileupload';
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
prodinfo?: Produtos;
nomeproduto:string = "";
descricao:string ="";
preco?:number;
id_categoria?:number;
file:any;
filepath:any;


constructor(private prodService: ProdutosService){
}
  ngOnInit() {
    this.prodService.getProdutos().subscribe((res)=>{
      this.produtos = res
        })

    this.prodService.getCategoria().subscribe((res)=>{
      this.categorias = res;
    })
  }

  abrirProdModal(){
    this.prodModal = true;
    this.nomeproduto = "";
    this.descricao ="";
    this.preco = undefined;
    this.id_categoria = 0;
  }

  prodInfo(){
    this.uProdModal = true;
    console.log(this.categorias)
    console.log(this.selectedProd)
  }

 updateProd(){
    this.prodinfo = {
      id_produto:this.selectedProd!.id_produto,
      nomeproduto:this.selectedProd!.nomeproduto,
      descricao:this.selectedProd!.descricao,
      preco:this.selectedProd!.preco,
      id_categoria:this.selectedProd!.id_categoria
    }


    this.prodService.updateProduto(this.prodinfo).subscribe();

    this.uProdModal = false;
  }


  deleteProd(){
    this.prodService.deleteProduto(this.selectedProd!.id_produto).subscribe()
    this.uProdModal = false;
  }


  criarProd(){
    this.prodinfo = {
      id_produto:0,
      nomeproduto: this.nomeproduto,
      descricao: this.descricao,
      preco: this.preco!,
      id_categoria:this.id_categoria,
      imagem:this.file.name
    }


    if (!this.file) return;

    this.prodService.criarProduto(this.prodinfo, this.file).subscribe((res)=>{
    console.log("sucesso")
    })

    this.prodModal = false
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
    console.log(this.file)

    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.filepath = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);

  }
  }

