export interface Restaurante {
  id_restaurante:number;
  localidade:string;
  telefone:number;
  nome_restaurante: string;
  morada: string;
}
export interface Encomendas{
  id_encomenda:number;
  id_utilizador:number;
  nome:string;
  nome_restaurante:string;
  precototal:number;
  tipoEnc:string;
  estado:string;
}

export interface ProdEnc{
  id_encomenda:number;
  nomeproduto:string;
  quant:string;
  preco:number;
}

export interface Func {
  id_funcionario:number;
  nomefunc:string;
  morada:string;
  email:string;
  telefone:number;
  codPostal:string;
  cargo:string;
}

export interface Pedido {
  id_pedido:number;
  nome_restaurante:string;
  id_restaurante:number;
  id_mesa:number;
  estado:string;
}

export interface PedProd {
  id_pedido?:number;
  id_produto:number;
  nomeproduto:string;
  quantidade:number;

}
