import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/models/produtos/produtos';
import { Pedido, Restaurante } from 'src/models/restaurante/restaurante';
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

  abrirPedEnc:boolean = false;
  editModal:boolean = false;
  addProduto:boolean = false;

  estados:estado[] =[{code:"Pendente", name:"Pendente"},
  {code:"Preparação", name:"Preparação"},
  {code:"Entregue", name:"Entregue"}]

  quantidade:Array<number> = [1,2,3,4,5,6,7,8,9,10];

  listarest:Restaurante[] = [];
  listamesa:any[] = [];
  listaprodutos:Produtos[] = []
  selectedRest?:Restaurante;
  selectedMesa?:number;


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
  this.getProd();
}
}

Produtos(){

  console.log(this.selectedRest);
  console.log(this.selectedMesa)

if (this.selectedMesa && this.selectedRest != undefined || null){
this.abaProdutos = true;

this.getProd()
}
}

criarPed(){

}


getProd(){
  this.prodService.getProdutos().subscribe((res)=>{
    this.listaprodutos = res;
    console.log(this.listaprodutos)
    })
}
}
