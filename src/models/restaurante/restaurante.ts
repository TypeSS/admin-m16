export interface Restaurante {
}

export interface Encomendas{
  id_encomenda:number;
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
