export interface Restaurante {
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
