export interface Produtos {
  nomeproduto: string;
  descricao: string;
  preco?: number;
  categoria?: string;
  id_categoria?:number;
  imagem?:string;
}

export interface Categoria {
  id_categoria: number;
  categoria: string;
}
