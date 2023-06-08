export interface Produtos {
  nomeproduto: string;
  descricao: string;
  preco: number;
  categoria: string;
  id_categoria:number;
}

export interface Categoria {
  id_categoria: number;
  categoria: string;
}
