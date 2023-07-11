import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Produtos } from 'src/models/produtos/produtos';
import { PedProd, Pedido, Restaurante } from 'src/models/restaurante/restaurante';
import { ProdutosService } from 'src/services/produtos/produtos.service';
import { RestauranteService } from 'src/services/restaurante/restaurante.service';
export interface estado{
  code:string;
  name:string;
}
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos:Pedido[] = [];
  selectedPed?:Pedido;
  prodInfo:any[]=[{"nomeproduto":"Cerveja", "preco":2, "quant":2}, {"nomeproduto":"Francesinha", "preco":12, "quant":1}]
  pedido?:object;
  abrirPedEnc:boolean = false;
  editModal:boolean = false;
  addProduto:boolean = false;

  addToCart?:PedProd;
  carrinho:PedProd[] = [];
  abaCarrinho:boolean = false;
  abaCarrinhoU:boolean = false;

  existingPed:PedProd[]=[];

  estados:estado[] =[{code:"Pendente", name:"Pendente"},
  {code:"Preparação", name:"Preparação"},
  {code:"Entregue", name:"Entregue"}]

  quantidade:Array<number> = [1,2,3,4,5,6,7,8,9,10];

  listarest:Restaurante[] = [];
  listamesa:any[] = [];
  listaprodutos:Produtos[] = []
  selectedRest?:number;
  selectedMesa?:number;

  updatePedidoProd?:object;

  abaProdutos:boolean = false;

  constructor(private resService:RestauranteService, private prodService:ProdutosService){}

ngOnInit() {
  this.resService.getPedido().subscribe((res)=>{
    this.pedidos = res
  })
}

abrirPedModal(){
  this.abrirPedEnc = true;
  this.resService.getRestaurantes().subscribe((res)=>{
    this.listarest = res;
  })
}

getMesas(){
  this.resService.getMesasRest(Number(this.selectedRest)).subscribe((res)=>{
    this.listamesa = res
})
}

editPedido(){
if(this.selectedPed?.estado == "Aberto"){
  this.editModal = true;
  this.resService.getPedProd(this.selectedPed.id_pedido).subscribe((res)=>{
    this.existingPed = res
  })
  this.getProd();
}
}

avancar(){

if (this.selectedMesa && this.selectedRest != undefined || null && this.abaCarrinho != true){
this.abaProdutos = true;

this.getProd()
}
if(this.abaProdutos == true && this.carrinho.length != 0){
  console.log(this.carrinho)
  this.abaProdutos = false;
  this.abaCarrinho = true;
}
}

avancarU(){
  if (this.addProduto == false && this.abaCarrinhoU == false){
    this.addProduto = true;
    this.carrinho = []
    this.getProd()
    }
    if(this.addProduto == true && this.carrinho.length != 0){
      console.log(this.carrinho)
      this.addProduto = false;
      this.abaCarrinhoU = true;
    }
}

criarPed(){
this.pedido = {
  "estado":"Aberto",
  "id_mesa":this.selectedMesa!,
  "id_restaurante":this.selectedRest!
}
  this.resService.fazerPedido(this.pedido)
  .pipe(
    switchMap(() => this.resService.pedidoProd(this.carrinho))
  )
  .subscribe();
}

atualizarPed(){


  for(let i=0;i<this.carrinho.length;i++){
    this.carrinho[i] = {
      "id_pedido":this.selectedPed!.id_pedido,
      "id_produto":this.carrinho[i].id_produto,
      "nomeproduto":this.carrinho[i].nomeproduto,
      "quantidade":this.carrinho[i].quantidade
    }
  }
this.resService.pedidoProdUpdate(this.carrinho).subscribe()
}


addCarrinho(item: Produtos) {
  const existingItem = this.carrinho.find(cartItem => cartItem.id_produto === item.id_produto);

  if (existingItem) {
    existingItem.quantidade += 1;
  } else {
     this.addToCart = {
      "id_produto": item.id_produto,
      "nomeproduto": item.nomeproduto,
      "quantidade": 1
    };
    this.carrinho.push(this.addToCart);
  }

  console.log(this.carrinho);
}

removeCarrinho(item: any) {
  const index = this.carrinho.indexOf(item);
  if (index > -1) {
    this.carrinho.splice(index, 1);
    console.log(this.carrinho)
  }
}

getProd(){
  this.prodService.getProdutos().subscribe((res)=>{
    this.listaprodutos = res;
    })
}
}
