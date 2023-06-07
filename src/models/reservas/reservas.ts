export interface Reservas {
    id_reserva:number;
    id_restaurante:number;
    nome: number;
    nome_restaurante: number;
    data:string;
    horas:string;
    nPessoas: number;
    situacao: string;
    observacoes: string;
  }

export interface LugaresMesa {
  id_mesa:number;
  nome_restaurante:string;
  lugares:number
}
